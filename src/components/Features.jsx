import React from 'react'

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

const Features = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">

      {/* How It Works */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Class</h3>
            <p className="text-gray-600">Select your current class level from 6th to 12th grade</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pick a Subject</h3>
            <p className="text-gray-600">Choose from Mathematics, Science, English, Social Studies, and more</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-pink-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Learning</h3>
            <p className="text-gray-600">Access chapter-wise resources, videos, and practice materials</p>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
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

export default Features
