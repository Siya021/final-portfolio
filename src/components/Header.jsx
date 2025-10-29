import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <section id="home" className="pt-24 md:pt-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Siyamthanda
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            A passionate Frontend Developer specializing in React and modern web technologies.
          </p>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <MapPin size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">Cape Town, South Africa</span>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
            >
              Contact Me <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#projects"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://placehold.co/400x400/E2E8F0/333?text=Siyamthanda's\nPhoto"
            alt="Siyamthanda"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
