import React from 'react'

const features = [
  {
    icon: '📚',
    title: 'Comprehensive Subjects',
    desc: 'Mathematics, Science, English, Social Studies, and more — all curated for your class level.',
  },
  {
    icon: '🧩',
    title: 'Interactive Quizzes',
    desc: 'Test your knowledge with quizzes after every lesson to solidify your understanding.',
  },
  {
    icon: '🎥',
    title: 'Video Lessons',
    desc: 'Watch expert teachers explain complex concepts in simple ways.',
  },
  {
    icon: '🚀',
    title: 'Progress Tracking',
    desc: 'Track your learning progress and achieve your academic goals with ease.',
  },
]

const Features = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-indigo-800 text-center mb-16">
        Why Choose OpenLearnHub?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
