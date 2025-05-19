import { useState, useEffect } from 'react';
import { getDomainProgress, updateDomainProgress } from '../services/domainService';
import { toast } from 'react-hot-toast';

const useDomainProgress = (domainName, defaultTopics) => {
  const [topics, setTopics] = useState(defaultTopics);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const domainId = domainName.toLowerCase().replace(/[\/\s]+/g, '-').trim();

  // Load progress when component mounts
  useEffect(() => {
    let isMounted = true;

    const loadProgress = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getDomainProgress(domainId);
        
        if (!isMounted) return;

        if (response?.domainProgress?.topics) {
          // Merge server topics with default topics to handle new topics added to defaults
          const mergedTopics = defaultTopics.map(defaultTopic => {
            const existingTopic = response.domainProgress.topics.find(t => t.id === defaultTopic.id);
            return existingTopic || { ...defaultTopic, completed: false };
          });
          setTopics(mergedTopics);
          const completedCount = mergedTopics.filter(topic => topic.completed).length;
          const newProgress = Math.round((completedCount / mergedTopics.length) * 100);
          setProgress(newProgress);
        } else {
          // Handle new domains or reset state
          setTopics(defaultTopics.map(topic => ({ ...topic, completed: false })));
          setProgress(0);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('Failed to load domain progress:', err);
        setError(err.message);
        toast.error('Failed to load progress. Please try again.');
        // Keep the default topics as fallback
        setTopics(defaultTopics.map(topic => ({ ...topic, completed: false })));
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProgress();

    return () => {
      isMounted = false;
    };
  }, [domainId, domainName, defaultTopics]);

  const updateTopics = async (newTopics) => {
    try {
      const prevTopics = [...topics];
      setTopics(newTopics); // Optimistic update

      const response = await updateDomainProgress(domainId, domainName, newTopics);
      
      if (response?.success) {
        const completedCount = newTopics.filter(topic => topic.completed).length;
        const newProgress = Math.round((completedCount / newTopics.length) * 100);
        setProgress(newProgress);

        // Show milestone notifications
        if (newProgress === 100) {
          toast.success('🎉 Congratulations! You\'ve completed all topics in this domain!');
        } else if (newProgress % 25 === 0 && newProgress > 0) {
          toast.success(`🌟 Milestone reached - ${newProgress}% of topics completed!`);
        } else if (completedCount === 1 && prevTopics.filter(t => t.completed).length === 0) {
          toast.success('🎯 Great start! You\'ve completed your first topic!');
        }
      } else {
        setTopics(prevTopics); // Rollback on failure
        throw new Error('Failed to update progress');
      }
    } catch (err) {
      console.error('Failed to update topics:', err);
      toast.error('Failed to save progress. Please try again.');
      throw err;
    }
  };

  return {
    topics,
    updateTopics,
    isLoading: loading,
    error,
    progress,
    refetch: () => {
      setLoading(true);
      setError(null);
      // Re-run the effect to reload data
      const domainIdCopy = domainId;
      const response = getDomainProgress(domainIdCopy)
        .then(data => {
          if (data?.domainProgress?.topics) {
            const mergedTopics = defaultTopics.map(defaultTopic => {
              const existingTopic = data.domainProgress.topics.find(t => t.id === defaultTopic.id);
              return existingTopic || { ...defaultTopic, completed: false };
            });
            setTopics(mergedTopics);
            const completedCount = mergedTopics.filter(topic => topic.completed).length;
            setProgress(Math.round((completedCount / mergedTopics.length) * 100));
          }
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to refetch domain progress:', err);
          setError(err.message);
          toast.error('Failed to refresh progress. Please try again.');
          setLoading(false);
        });
    }
  };
};

export default useDomainProgress;