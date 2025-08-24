import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

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

  const stats = [
    { number: '7', label: 'Classes Covered' },
    { number: '5+', label: 'Subjects per Class' },
    { number: '100+', label: 'Chapters Available' },
    { number: '24/7', label: 'Access Available' }
  ]

  const team = [
    {
      name: 'OpenLearnHub Team(Suryansh)',
      role: 'Development & Content',
      description: 'Dedicated to creating the best learning experience for students',
      avatar: '👨‍💻'
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">OpenLearnHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with structured learning roadmaps and comprehensive educational resources
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
              OpenLearnHub is dedicated to democratizing quality education by providing students from Classes 6 to 12 
              with comprehensive, structured learning roadmaps. We believe every student deserves access to 
              well-organized study materials, engaging video content, and practice resources that make learning 
              both effective and enjoyable.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes Us Different</h2>
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
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
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

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Support */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Join thousands of students who are already benefiting from our structured learning approach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <button
                onClick={() => navigate('/classes')}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Explore Classes
              </button>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Sign Up Now
              </button>
            )}
            <button
              onClick={() => navigate('/')}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
