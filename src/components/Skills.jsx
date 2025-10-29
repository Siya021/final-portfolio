import React from 'react'
import { Code, Palette, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: 'Code',
    icon: Code,
    skills: [
      'HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', '.NET MAUI', 'Vue.js',
      'TailwindCSS', 'Bootstrap', 'Node.js', 'MongoDB', 'MySQL', 'Mongoose',
      'REST APIs', 'Git/GitHub', 'Agile Project Management', 'Responsive Web Development'
    ]
  },
  {
    title: 'Design',
    icon: Palette,
    skills: [
      'Figma', 'Adobe XD', 'Design Thinking', 'Wireframing', 'Prototyping',
      'Adobe Photoshop', 'Adobe Illustrator', 'Canva',
      'User-Centered Design', 'Color Theory', 'Layout Design', 'Visual Hierarchy'
    ]
  },
  {
    title: 'Branding',
    icon: Globe,
    skills: [
      'Logo Design', 'Brand Strategy', 'Typography', 'Color Systems',
      'Social Media Graphics', 'Promotional Posters', 'Product Mockups',
      'Digital Branding', 'Visual Storytelling', 'Community-Focused Design'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <category.icon size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
