const User = require('../models/User');

// Update domain progress for a user
const updateDomainProgress = async (req, res) => {
  try {
    const { domainId, domainName, topics } = req.body;
    const userId = req.user._id;

    // Enhanced input validation
    if (!userId || !domainId || !domainName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: userId, domainId, or domainName'
      });
    }

    if (!Array.isArray(topics)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid topics data - expected an array'
      });
    }

    // Validate topics array content
    const isValidTopics = topics.every(topic => 
      typeof topic.id === 'number' && 
      typeof topic.name === 'string' && 
      typeof topic.completed === 'boolean'
    );

    if (!isValidTopics) {
      return res.status(400).json({
        success: false,
        error: 'Invalid topic format - each topic must have id (number), name (string), and completed (boolean)'
      });
    }

    // Find user and update atomically
    const completedTopics = topics.filter(topic => topic.completed).length;
    const domainUpdate = {
      domainId,
      domainName,
      topics,
      completedTopics,
      totalTopics: topics.length,
      lastUpdated: new Date()
    };

    // Use findOneAndUpdate to avoid race conditions
    const user = await User.findOneAndUpdate(
      { _id: userId, 'domainProgress.domainId': { $ne: domainId } },
      {
        $push: { 
          domainProgress: domainUpdate 
        }
      },
      { new: true }
    );

    if (!user) {
      // Domain progress exists, update it
      const updatedUser = await User.findOneAndUpdate(
        { 
          _id: userId, 
          'domainProgress.domainId': domainId 
        },
        {
          $set: { 
            'domainProgress.$': domainUpdate
          }
        },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(500).json({
          success: false,
          error: 'Failed to update domain progress'
        });
      }

      // Update total completed topics
      const totalCompleted = updatedUser.domainProgress.reduce(
        (sum, domain) => sum + domain.completedTopics,
        0
      );

      await User.findByIdAndUpdate(userId, { totalTopicsCompleted: totalCompleted });

      return res.json({
        success: true,
        domainProgress: domainUpdate,
        totalTopicsCompleted: totalCompleted
      });
    }

    // First time domain progress was added
    // Calculate new total
    const totalCompleted = user.domainProgress.reduce(
      (sum, domain) => sum + domain.completedTopics,
      0
    );

    await User.findByIdAndUpdate(userId, { totalTopicsCompleted: totalCompleted });

    res.json({
      success: true,
      domainProgress: domainUpdate,
      totalTopicsCompleted: totalCompleted
    });

  } catch (error) {
    console.error('Error updating domain progress:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while updating domain progress'
    });
  }
};

// Get domain progress for a user
const getDomainProgress = async (req, res) => {
  try {
    const userId = req.user._id;
    const { domainId } = req.params;

    if (!userId || !domainId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: userId or domainId'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const domainProgress = user.domainProgress.find(
      d => d.domainId === domainId
    );

    // For new domains without progress, return success with null data
    res.json({
      success: true,
      domainProgress: domainProgress || null
    });

  } catch (error) {
    console.error('Error fetching domain progress:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Server error while fetching domain progress'
    });
  }
};

// Get all domains progress for a user
const getAllDomainsProgress = async (req, res) => {
  try {
    const userId = req.user._id;
    
    if (!userId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameter: userId'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      domainsProgress: user.domainProgress || [],
      totalTopicsCompleted: user.totalTopicsCompleted || 0
    });

  } catch (error) {
    console.error('Error fetching all domains progress:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Server error while fetching domains progress'
    });
  }
};

// Get recent activity for a user
const getRecentActivity = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameter: userId'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Get recent activity from domain progress, sorted by lastUpdated
    const recentActivity = user.domainProgress
      .reduce((activities, domain) => {
        const domainActivities = domain.topics
          .filter(topic => topic.completedAt)
          .map(topic => ({
            domainId: domain.domainId,
            domainName: domain.domainName,
            topicId: topic.id,
            title: `Completed "${topic.name}"`,
            time: topic.completedAt
          }));
        return [...activities, ...domainActivities];
      }, [])
      .sort((a, b) => new Date(b.time) - new Date(a.time))
      .slice(0, 10); // Limit to most recent 10 activities

    res.json({
      success: true,
      recentActivity
    });

  } catch (error) {
    console.error('Error fetching recent activity:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Server error while fetching recent activity' 
    });
  }
};

module.exports = {
  updateDomainProgress,
  getDomainProgress,
  getAllDomainsProgress,
  getRecentActivity
};