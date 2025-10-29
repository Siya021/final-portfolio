import React from 'react'
import { Code, Palette, Globe } from 'lucide-react'
import skillCategories from '../data/skillsData'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const iconMap = {
              Code: Code,
              Design: Palette,
              Branding: Globe,
            }
            const Icon = iconMap[category.title] || Code
            return (
              <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Icon size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">{skill}</span>
                ))}
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
