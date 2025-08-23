import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold text-indigo-800 leading-tight">
          Empower Your Learning Journey <br /> From Class 6 to 12
        </h1>
        <p className="mt-6 text-lg text-indigo-700 max-w-lg">
          Interactive lessons, quizzes, resources and expert guidance tailored for young learners.
          Build concepts strong with OpenLearnHub!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/classes"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition text-center"
          >
            Explore Classes
          </Link>
          <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
            Get Started Now
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
          alt="Learning illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Hero
