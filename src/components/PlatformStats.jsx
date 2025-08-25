import React from 'react'

const PlatformStats = () => {
  const stats = [
    { number: '7', label: 'Classes Covered' },
    { number: '5+', label: 'Subjects per Class' },
    { number: '100+', label: 'Chapters Available' },
    { number: '24/7', label: 'Access Available' }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-indigo-800 text-center mb-16">
          Platform Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformStats
