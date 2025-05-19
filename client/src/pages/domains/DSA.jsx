import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import ProgressBar from '../../components/ProgressBar';
import TopicChecklist from '../../components/TopicChecklist';
import useDomainProgress from '../../hooks/useDomainProgress';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

// Domain-specific data
const domainName = "DSA";
const domainColor = "bg-blue-500"; // From domainColors in domainList.js

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Arrays and Strings", completed: false },
  { id: 2, name: "Linked Lists", completed: false },
  { id: 3, name: "Stacks and Queues", completed: false },
  { id: 4, name: "Trees and Graphs", completed: false },
  { id: 5, name: "Hash Tables", completed: false },
  { id: 6, name: "Heaps", completed: false },
  { id: 7, name: "Dynamic Programming", completed: false },
  { id: 8, name: "Greedy Algorithms", completed: false },
  { id: 9, name: "Sorting and Searching", completed: false },
  { id: 10, name: "Recursion and Backtracking", completed: false },
  { id: 11, name: "Bit Manipulation", completed: false },
  { id: 12, name: "System Design Basics", completed: false },
];

const DSA = () => {
  const { topics, updateTopics, isLoading, error, progress, refetch } = useDomainProgress(domainName, defaultTopics);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 py-8 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="large" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading your progress...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-red-600 dark:text-red-400">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Failed to Load Progress</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <button
            onClick={refetch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 py-8">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-8">
          <Link 
            to="/domains" 
            className="absolute top-0 left-0 flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to Domains</span>
          </Link>

          <div className="text-center pt-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Data Structures &amp; Algorithms</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Master fundamental DSA concepts and improve your problem-solving skills
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Progress</h2>
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{progress}%</span>
              </div>
              <ProgressBar 
                value={progress} 
                color={domainColor} 
                className="h-3 rounded-full"
              />
              
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{topics.length}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Topics</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {topics.filter(t => t.completed).length}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {topics.length - topics.filter(t => t.completed).length}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Remaining</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {progress >= 100 ? '🎉' : '📚'}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {progress >= 100 ? 'Complete!' : 'In Progress'}
                  </div>
                </div>
              </div>
            </div>

            {/* Topics Checklist */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Learning Path</h2>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div key={topic.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <span className={`
                          inline-flex items-center justify-center h-8 w-8 rounded-full
                          ${topic.completed 
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}
                        `}>
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {topic.name}
                        </h3>
                      </div>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={topic.completed}
                        onChange={() => {
                          const newTopics = [...topics];
                          newTopics[index].completed = !newTopics[index].completed;
                          updateTopics(newTopics).catch(() => {
                            // Error is handled by the hook
                            toast.error('Failed to update progress');
                          });
                        }}
                        className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Resources */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Resources</h2>
              <div className="space-y-4">
                <a 
                  href="#"
                  className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Practice Problems</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Curated collection of DSA problems</p>
                </a>
                <a 
                  href="#"
                  className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Video Tutorials</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Step-by-step explanations</p>
                </a>
                <a 
                  href="#"
                  className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">Documentation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Detailed concepts and implementations</p>
                </a>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next Steps</h2>
              {progress < 100 ? (
                <div className="space-y-4">
                  {topics.filter(t => !t.completed).slice(0, 3).map((topic, index) => (
                    <div key={topic.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">{index + 1}</span>
                        {topic.name}
                      </h3>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    🎉 All topics completed!
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ready for advanced challenges
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSA;