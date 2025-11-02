import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar';
import useDomainProgress from '../../hooks/useDomainProgress';

const COLOR_STYLES = {
  pink: {
    pageBg: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-800/40',
    accentText: 'text-pink-600 dark:text-pink-400',
    itemCompleted: 'bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200',
    checkboxRing: 'focus:ring-pink-500 dark:focus:ring-pink-600',
  },
  orange: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-orange-600 dark:text-orange-400',
    itemCompleted: 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200',
    checkboxRing: 'focus:ring-orange-500 dark:focus:ring-orange-600',
  },
  violet: {
    pageBg: 'bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/40 dark:to-violet-800/40',
    accentText: 'text-violet-600 dark:text-violet-400',
    itemCompleted: 'bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200',
    checkboxRing: 'focus:ring-violet-500 dark:focus:ring-violet-600',
  },
  rose: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-rose-600 dark:text-rose-400',
    itemCompleted: 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200',
    checkboxRing: 'focus:ring-rose-500 dark:focus:ring-rose-600',
  },
  cyan: {
    pageBg: 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/40 dark:to-cyan-800/40',
    accentText: 'text-cyan-600 dark:text-cyan-400',
    itemCompleted: 'bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-cyan-200 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200',
    checkboxRing: 'focus:ring-cyan-500 dark:focus:ring-cyan-600',
  },
  zinc: {
    pageBg: 'bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/40 dark:to-zinc-800/40',
    accentText: 'text-zinc-600 dark:text-zinc-400',
    itemCompleted: 'bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200',
    checkboxRing: 'focus:ring-zinc-500 dark:focus:ring-zinc-600',
  },
  blue: {
    pageBg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40',
    accentText: 'text-blue-600 dark:text-blue-400',
    itemCompleted: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200',
    checkboxRing: 'focus:ring-blue-500 dark:focus:ring-blue-600',
  },
  purple: {
    pageBg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40',
    accentText: 'text-purple-600 dark:text-purple-400',
    itemCompleted: 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200',
    checkboxRing: 'focus:ring-purple-500 dark:focus:ring-purple-600',
  },
  indigo: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-indigo-600 dark:text-indigo-400',
    itemCompleted: 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200',
    checkboxRing: 'focus:ring-indigo-500 dark:focus:ring-indigo-600',
  },
  sky: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-sky-600 dark:text-sky-400',
    itemCompleted: 'bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-sky-200 dark:bg-sky-800 text-sky-800 dark:text-sky-200',
    checkboxRing: 'focus:ring-sky-500 dark:focus:ring-sky-600',
  },
  amber: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-amber-600 dark:text-amber-400',
    itemCompleted: 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200',
    checkboxRing: 'focus:ring-amber-500 dark:focus:ring-amber-600',
  },
  lime: {
    pageBg: 'bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-900/40 dark:to-lime-800/40',
    accentText: 'text-lime-600 dark:text-lime-400',
    itemCompleted: 'bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-lime-200 dark:bg-lime-800 text-lime-800 dark:text-lime-200',
    checkboxRing: 'focus:ring-lime-500 dark:focus:ring-lime-600',
  },
  red: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-red-600 dark:text-red-400',
    itemCompleted: 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200',
    checkboxRing: 'focus:ring-red-500 dark:focus:ring-red-600',
  },
  teal: {
    pageBg: 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-900 dark:to-gray-800',
    accentText: 'text-teal-600 dark:text-teal-400',
    itemCompleted: 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    badgeCompleted: 'bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200',
    checkboxRing: 'focus:ring-teal-500 dark:focus:ring-teal-600',
  },
  green: {
    pageBg: 'bg-gray-50 dark:bg-gray-900',
    accentText: 'text-green-600 dark:text-green-400',
    itemCompleted: 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800',
    itemHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    badgeCompleted: 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200',
    checkboxRing: 'focus:ring-green-500 dark:focus:ring-green-600',
  },
};

export default function DomainPageTemplate({
  domainName,
  defaultTopics,
  description,
  techStack = [],
  resources = { docs: [], videos: [] },
  colorKey = 'pink',
  domainColor = 'bg-pink-500', // used by ProgressBar
}) {
  const styles = COLOR_STYLES[colorKey] || COLOR_STYLES.pink;
  const [progress, setProgress] = useState(0);
  const { topics, updateTopics, isLoading } = useDomainProgress(domainName, defaultTopics);

  useEffect(() => {
    const completedCount = topics.filter(t => t.completed).length;
    setProgress(topics.length ? Math.round((completedCount / topics.length) * 100) : 0);
  }, [topics]);

  return (
    <div className={`min-h-screen ${styles.pageBg} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-8">
          <Link 
            to="/domains" 
            className={`absolute top-0 left-0 flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:${styles.accentText.split(' ')[0]} transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Back to Domains</span>
          </Link>

          <div className="text-center pt-12">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{domainName}</h1>
            {description && (
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Progress</h2>
                <span className={`text-3xl font-bold ${styles.accentText}`}>{progress}%</span>
              </div>
              <ProgressBar value={progress} color={domainColor} className="h-3 rounded-full" />

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{topics.length}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Topics</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{topics.filter(t => t.completed).length}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{topics.length - topics.filter(t => t.completed).length}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Remaining</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className={`text-2xl font-bold ${styles.accentText}`}>{Math.round((topics.filter(t => t.completed).length / (topics.length || 1)) * 100)}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Topics Checklist */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Learning Path</h2>
              <div className="grid gap-4">
                {topics.map((topic, index) => (
                  <div
                    key={topic.id}
                    className={`relative flex items-center p-4 rounded-lg transition-all duration-200 ${topic.completed ? styles.itemCompleted : `bg-gray-50 dark:bg-gray-900 ${styles.itemHover}`}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 text-sm font-medium ${topic.completed ? styles.badgeCompleted : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{topic.name}</h3>
                      </div>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={topic.completed}
                        onChange={() => {
                          const newTopics = [...topics];
                          newTopics[index].completed = !newTopics[index].completed;
                          updateTopics(newTopics)
                            .then(() => {
                              const completedCount = newTopics.filter(t => t.completed).length;
                              setProgress(Math.round((completedCount / newTopics.length) * 100));
                            })
                            .catch((error) => {
                              console.error('Failed to update progress:', error);
                            });
                        }}
                        className={`w-5 h-5 rounded border-gray-300 ${styles.checkboxRing} dark:ring-offset-gray-800 dark:bg-gray-900 dark:border-gray-600`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">{t}</span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Learning Resources</h2>

              {resources.docs?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Documentation</h3>
                  {resources.docs.map((doc) => (
                    <a key={doc.href} href={doc.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${styles.accentText} mr-4`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{doc.title}</div>
                        {doc.subtitle && <div className="text-sm text-gray-500 dark:text-gray-400">{doc.subtitle}</div>}
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {resources.videos?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Video Tutorials</h3>
                  <div className="grid gap-4">
                    {resources.videos.map((vid) => (
                      <a key={vid.href} href={vid.href} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg aspect-video">
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                          <div className="text-white text-sm font-medium">{vid.title}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
