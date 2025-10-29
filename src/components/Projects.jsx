import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projectData'

export default function Projects() {
  const categories = ['All', 'Code', 'Design', 'Branding']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = projectsData.filter(p => activeCategory === 'All' || p.category === activeCategory)

  const bentoLayout = [
    { gridClass: 'md:col-span-2 md:row-span-2', imageClass: 'h-64 sm:h-96' },
    { gridClass: 'md:col-span-1', imageClass: 'h-48' },
    { gridClass: 'md:col-span-1', imageClass: 'h-48' },
    { gridClass: 'md:col-span-2', imageClass: 'h-48' },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Projects</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const layout = bentoLayout[index % bentoLayout.length]
              return (
                <div key={project.title} className={layout.gridClass}>
                  <ProjectCard
                    {...project}
                    imageClassName={layout.imageClass}
                  />
                </div>
              )
            })
          ) : (
            <div className="md:col-span-3 flex items-center justify-center h-full p-10 min-h-[300px]">
              <p className="text-center text-gray-600 dark:text-gray-300 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
