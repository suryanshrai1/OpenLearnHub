import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Classes = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const classes = [
    {
      id: 6,
      name: "Class 6",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      description: "Foundation building year with basic concepts and fundamental skills",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 7,
      name: "Class 7",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      description: "Intermediate concepts with practical applications",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 8,
      name: "Class 8",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      description: "Advanced fundamentals preparing for board exams",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 9,
      name: "Class 9",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      description: "Board exam preparation begins with detailed topics",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 10,
      name: "Class 10",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      description: "First major board examination with comprehensive syllabus",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 11,
      name: "Class 11",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
      description: "Higher secondary education with specialized streams",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 12,
      name: "Class 12",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
      description: "Final year preparing for competitive exams and college",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const handleExploreRoadmap = (classItem) => {
    console.log('Explore Roadmap clicked for:', classItem.name, 'ID:', classItem.id)
    console.log('Current user:', user)
    console.log('Navigating to:', `/class/${classItem.id}`)
    
    // Navigate to the subject list for the selected class
    navigate(`/class/${classItem.id}`)
  }

  const testNavigation = () => {
    console.log('Test button clicked!')
    navigate('/class/6')
  }

  console.log('Classes component rendered, user:', user)

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Class</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome back, {user?.email}! Explore your personalized learning roadmaps and track your progress.
          </p>
          
          {/* Test Button */}
          <button 
            onClick={testNavigation}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            🧪 TEST: Go to Class 6 Subjects
          </button>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${classItem.color} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">{classItem.name}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-center">
                  {classItem.description}
                </p>
                
                {/* Subjects */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Subjects Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {classItem.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => {
                    console.log('Button clicked directly!')
                    handleExploreRoadmap(classItem)
                  }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl relative z-10 cursor-pointer"
                  style={{ position: 'relative', zIndex: 10 }}
                >
                  Explore Roadmap
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Continue Learning?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Keep up the great work! Your learning journey is just getting started.
            </p>
            <button 
              onClick={() => navigate('/classes')}
              className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes 