import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    setIsProfileMenuOpen(false)
  }

  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md shadow-md z-50 px-8 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-indigo-700 font-extrabold text-2xl hover:text-indigo-800 transition">
          OpenLearnHub
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold items-center">
          <li>
            <Link 
              to="/" 
              className={`hover:text-indigo-600 transition ${location.pathname === '/' ? 'text-indigo-600' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`hover:text-indigo-600 transition ${location.pathname === '/about' ? 'text-indigo-600' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/classes" 
              className={`hover:text-indigo-600 transition ${location.pathname === '/classes' ? 'text-indigo-600' : ''}`}
            >
              Classes
            </Link>
          </li>
          <li><a href="#features" className="hover:text-indigo-600 transition">Features</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
          
          {/* Auth Buttons */}
          {user ? (
            <li className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden lg:block">Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user.email}</p>
                    <p className="text-xs text-gray-500">Student</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <Link 
                to="/auth"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <ul className="pt-4 space-y-3 text-gray-700 font-semibold">
            <li>
              <Link 
                to="/" 
                className={`block py-2 px-4 rounded-lg hover:bg-gray-100 transition ${location.pathname === '/' ? 'text-indigo-600 bg-indigo-50' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 px-4 rounded-lg hover:bg-gray-100 transition ${location.pathname === '/about' ? 'text-indigo-600 bg-indigo-50' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/classes" 
                className={`block py-2 px-4 rounded-lg hover:bg-gray-100 transition ${location.pathname === '/classes' ? 'text-indigo-600 bg-indigo-50' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Classes
              </Link>
            </li>
            <li><a href="#features" className="block py-2 px-4 rounded-lg hover:bg-gray-100 transition">Features</a></li>
            <li><a href="#contact" className="block py-2 px-4 rounded-lg hover:bg-gray-100 transition">Contact</a></li>
            
            {/* Mobile Auth */}
            {user ? (
              <li className="border-t border-gray-200 pt-3">
                <div className="px-4 py-2">
                  <p className="text-sm font-medium text-gray-900">{user.email}</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li className="border-t border-gray-200 pt-3">
                <Link 
                  to="/auth"
                  className="block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
