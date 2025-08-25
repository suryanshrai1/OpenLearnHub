import React from 'react'

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-indigo-800 text-center mb-16">
        How It Works
      </h2>
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
    </section>
  )
}

export default HowItWorks
