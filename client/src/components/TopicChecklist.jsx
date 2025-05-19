import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { updateDomainProgress } from '../services/domainService';

const TopicChecklist = ({ topics: initialTopics, domainName, onProgressChange }) => {
  const [topics, setTopics] = useState(initialTopics);

  // Initialize or clear progress when component mounts
  useEffect(() => {
    const key = `domain_${domainName.replace(/\s+/g, '_').toLowerCase()}`;
    localStorage.removeItem(key); // Clear any existing data
    setTopics(initialTopics.map(topic => ({ ...topic, completed: false })));
    if (onProgressChange) {
      onProgressChange(0);
    }
  }, [domainName]);

  // Update parent component with progress whenever checked topics change
  useEffect(() => {
    if (onProgressChange) {
      const completedCount = topics.filter(topic => topic.completed).length;
      const progress = Math.round((completedCount / topics.length) * 100);
      onProgressChange(progress);
    }
  }, [topics, onProgressChange]);

  const handleTopicToggle = async (topicId) => {
    try {
      const updatedTopics = topics.map(topic => 
        topic.id === topicId 
          ? { ...topic, completed: !topic.completed }
          : topic
      );

      // Update progress calculation
      const completedCount = updatedTopics.filter(t => t.completed).length;
      const progress = Math.round((completedCount / updatedTopics.length) * 100);
      
      // Update parent component
      await updateDomainProgress(domainId, domainName, updatedTopics);
      onProgressChange(progress);

      // Show milestone notifications
      if (progress === 100) {
        toast.success(`🎉 Congratulations! You've completed all ${domainName} topics!`);
      } else if (progress % 25 === 0 && progress > 0) {
        toast.success(`🌟 Milestone: ${progress}% of ${domainName} topics completed!`);
      } else if (completedCount === 1 && topics.filter(t => t.completed).length === 0) {
        toast.success(`🎯 Great start! You've completed your first ${domainName} topic!`);
      }
    } catch (error) {
      console.error('Failed to update topic:', error);
      toast.error('Failed to update progress. Please try again.');
    }
  };

  return (
    <div className="space-y-4" role="list" aria-label={`${domainName} topics checklist`}>
      {topics.map((topic, index) => (
        <div 
          key={topic.id}
          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
          role="listitem"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <span
                className={`
                  inline-flex items-center justify-center h-8 w-8 rounded-full
                  ${topic.completed 
                    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}
                `}
                aria-hidden="true"
              >
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {topic.name}
              </h3>
              {topic.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {topic.description}
                </p>
              )}
            </div>
          </div>
          <div className="ml-4">
            <input
              type="checkbox"
              checked={topic.completed}
              onChange={() => handleTopicToggle(topic.id)}
              className="w-5 h-5 text-green-600 rounded border-gray-300 
                focus:ring-green-500 dark:focus:ring-green-600 
                dark:ring-offset-gray-800 dark:bg-gray-700 
                dark:border-gray-600"
              aria-label={`Mark ${topic.name} as ${topic.completed ? 'incomplete' : 'complete'}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

TopicChecklist.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  onTopicsUpdate: PropTypes.func.isRequired,
  onProgressChange: PropTypes.func.isRequired,
  domainName: PropTypes.string.isRequired,
};

export default TopicChecklist;