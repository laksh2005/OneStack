import { API_URL } from '../constants/api';

/**
 * Get user authentication data from local storage
 * @returns {Object} User data including token
 * @throws {Error} If user is not logged in or token is missing
 */
const getUserAuthData = () => {
  const userData = localStorage.getItem('user');
  if (!userData) {
    throw new Error('Please log in to view your progress');
  }

  const parsedData = JSON.parse(userData);
  if (!parsedData?.token) {
    localStorage.removeItem('user'); // Clear invalid data
    throw new Error('Session expired. Please log in again');
  }

  return parsedData;
};

/**
 * Update domain progress
 * @param {string} domainId - The domain identifier
 * @param {string} domainName - The domain name
 * @param {Array} topics - Array of topic objects with completion status
 * @returns {Promise} API response with updated progress
 */
export const updateDomainProgress = async (domainId, domainName, topics) => {
  try {
    if (!domainId || !domainName || !Array.isArray(topics)) {
      throw new Error('Missing or invalid parameters');
    }

    const { token } = getUserAuthData();
    
    // Validate topics array
    if (!topics.every(topic => 
      topic.id && 
      typeof topic.name === 'string' && 
      typeof topic.completed === 'boolean'
    )) {
      throw new Error('Invalid topic data structure');
    }

    const response = await fetch(`${API_URL}/domains/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        domainId,
        domainName,
        topics: topics.map(topic => ({
          ...topic,
          completedAt: topic.completed && !topic.completedAt ? new Date().toISOString() : topic.completedAt
        }))
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to update progress');
    }

    return data;
  } catch (error) {
    console.error('Error updating domain progress:', error);
    throw error;
  }
};

/**
 * Get progress for a specific domain
 * @param {string} domainId - The domain identifier
 * @returns {Promise} API response with domain progress
 */
export const getDomainProgress = async (domainId) => {
  try {
    if (!domainId) {
      throw new Error('Domain ID is required');
    }

    const { token } = getUserAuthData();

    const response = await fetch(`${API_URL}/domains/progress/${domainId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch domain progress');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching domain progress:', error);
    throw error;
  }
};

/**
 * Get progress for all domains
 * @returns {Promise} API response with all domains progress
 */
export const getAllDomainsProgress = async () => {
  try {
    const { token } = getUserAuthData();

    const response = await fetch(`${API_URL}/domains/progress`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch domains progress');
    }

    return {
      domainsProgress: data.domainsProgress || [],
      totalTopicsCompleted: data.totalTopicsCompleted || 0
    };
  } catch (error) {
    console.error('Error fetching all domains progress:', error);
    throw error;  }
};

/**
 * Get recent activity for the current user
 * @returns {Promise} API response with recent activity
 */
export const getRecentActivity = async () => {
  try {
    const { token } = getUserAuthData();

    const response = await fetch(`${API_URL}/domains/recent-activity`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch recent activity');
    }

    return data.recentActivity || [];
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    throw error;
  }
};