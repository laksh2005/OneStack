import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { domainColors } from '../data/domainList';

// Domain-specific icons mapping
const domainEmojis = {
  'DSA': '🔄',                    // Algorithm cycle
  'Aptitude': '🧩',               // Puzzle piece
  'Data Science': '📊',           // Chart
  'GenAI': '🤖',                  // Robot face
  'AIML': '🧠',                   // Brain
  'DevOps': '♾️',                 // Infinity
  'Cloud Computing': '☁️',        // Cloud
  'Blockchain': '⛓️',             // Chain
  'Cyber Security': '🔒',         // Lock
  'Android Dev': '📱',            // Mobile phone
  'iOS Dev': '🍎',                // Apple
  'Web Dev': '🌐',                // Globe with meridians
  'Game Dev': '🎮',               // Game controller
  'UI/UX': '🎨',                  // Artist palette
  'Ethical Hacking': '🛡️',        // Shield
  'Web3': '🌿',                   // New technology (plant)
  'IoT': '📡',                    // Satellite antenna
  'VLSI': '💽'                    // Computer chip
};

const DomainCard = ({ name, completedTopics = 0, totalTopics = 0 }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a URL-friendly version of the domain name
  const domainId = name.toLowerCase().replace(/[\/\s]+/g, '-').trim();
  
  // Get domain color or use default blue
  const colorClass = domainColors[name] || 'bg-blue-500';

  // Calculate progress percentage
  const progress = totalTopics > 0 
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  const getCardStyle = () => {
    let style = `relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer 
                 transition-all duration-300 ease-in-out transform ${isHovered ? 'scale-105' : ''} 
                 hover:shadow-2xl border border-gray-100 dark:border-gray-700`;
    if (progress > 0) {
      style += ` border-l-4 ${colorClass.replace('bg-', 'border-')}`;
    }
    return style;
  };

  return (
    <div 
      className={getCardStyle()}
      onClick={() => navigate(`/domains/${domainId}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern */}
      <div className={`absolute inset-0 opacity-5 dark:opacity-10 ${colorClass} pattern-dots`} />
      
      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colorClass} bg-opacity-20 dark:bg-opacity-30 mb-4`}>
          <span className="text-2xl" role="img" aria-label={name}>
            {domainEmojis[name] || '📚'}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{name}</h3>
        
        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-300">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <ProgressBar progress={progress} />
          <div className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            {completedTopics} / {totalTopics} topics completed
          </div>
        </div>

        {/* Status badge */}
        {progress > 0 && (
          <div className="mt-4">
            {progress === 100 ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Completed
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                In Progress
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainCard;