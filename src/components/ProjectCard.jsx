import React from 'react'

export default function ProjectCard({ title, description, imageUrl, liveUrl, repoUrl, className = "", imageClassName = "h-48" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full flex flex-col ${className}`}>
      <img
        src={imageUrl}
        alt={title}
        className={`w-full object-cover ${imageClassName}`}
        onError={(e) => { e.target.src = 'https://placehold.co/600x400/E2E8F0/333?text=Project+Image'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex space-x-4 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
