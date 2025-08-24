import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const SubjectList = () => {
  const { classId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  // Subject data for Class 6
  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '🔢',
      description: 'Numbers, algebra, geometry, and basic mathematical concepts',
      color: 'from-blue-500 to-cyan-500',
      chapters: 12
    },
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      description: 'Physics, chemistry, and biology fundamentals',
      color: 'from-green-500 to-emerald-500',
      chapters: 16
    },
    {
      id: 'english',
      name: 'English',
      icon: '📚',
      description: 'Grammar, literature, and communication skills',
      color: 'from-purple-500 to-pink-500',
      chapters: 10
    },
    {
      id: 'social-studies',
      name: 'Social Studies',
      icon: '🌍',
      description: 'History, geography, and civics',
      color: 'from-orange-500 to-red-500',
      chapters: 14
    },
    {
      id: 'hindi',
      name: 'Hindi',
      icon: '🇮🇳',
      description: 'Hindi grammar, literature, and language skills',
      color: 'from-indigo-500 to-purple-500',
      chapters: 8
    }
  ]

  const handleSubjectClick = (subjectId) => {
    navigate(`/class/${classId}/subject/${subjectId}`)
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <button
              onClick={() => navigate('/classes')}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Classes
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Class {classId} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Subjects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome back, {user?.email}! Choose a subject to explore detailed chapter-wise content, 
            including study materials, video lectures, and practice resources.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => handleSubjectClick(subject.id)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${subject.color} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{subject.icon}</div>
                    <h2 className="text-2xl font-bold text-white">{subject.name}</h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-center">
                  {subject.description}
                </p>
                
                {/* Subject Info */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Total Chapters</span>
                    <span className="font-semibold text-indigo-600">{subject.chapters}</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl text-center group-hover:from-indigo-700 group-hover:to-purple-700 transition-all duration-200">
                  Explore Subject
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Progress Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Track your progress across all subjects and chapters. Start with any subject 
              and build your knowledge step by step.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              {subjects.map((subject) => (
                <div key={subject.id} className="text-center">
                  <div className="text-2xl mb-2">{subject.icon}</div>
                  <div className="text-sm font-medium">{subject.name}</div>
                  <div className="text-xs text-indigo-200">0/{subject.chapters}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectList
