import React from 'react'

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Structured Learning Paths',
      description: 'Well-organized roadmaps for Classes 6-12 with clear progression paths'
    },
    {
      icon: '📚',
      title: 'Comprehensive Resources',
      description: 'Access to study materials, video lectures, practice questions, and reference books'
    },
    {
      icon: '🔐',
      title: 'Personalized Experience',
      description: 'Track your progress and access content tailored to your learning journey'
    },
    {
      icon: '📱',
      title: 'Modern Interface',
      description: 'Clean, responsive design that works seamlessly across all devices'
    },
    {
      icon: '🚀',
      title: 'Continuous Updates',
      description: 'Regular content updates and new resources added frequently'
    },
    {
      icon: '🎓',
      title: 'Expert Content',
      description: 'Curated materials from trusted educational sources and institutions'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-indigo-800 text-center mb-16">
        What Makes Us Different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatMakesUsDifferent
