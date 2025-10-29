import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import IconBehance from './icons/IconBehance'

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Siyamthanda-Ndabase',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/siyamthanda-ndabase',
    },
    {
      name: 'Behance',
      icon: IconBehance,
      url: 'https://behance.net/siyamthanda',
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform hover:scale-110"
              aria-label={`Siyamthanda's ${link.name} profile`}
            >
              <link.icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
