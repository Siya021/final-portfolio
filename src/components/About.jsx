import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Hello! I'm Siyamthanda, a self-taught frontend developer with a strong passion for building
            beautiful, functional, and user-friendly web applications.
          </p>
          <p>
            My journey into web development started with a curiosity for how websites work, and it
            has grown into a full-fledged passion. I thrive on solving problems, learning new
            technologies, and collaborating with others to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  )
}
