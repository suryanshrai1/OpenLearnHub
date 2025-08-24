import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-200 transition">
              OpenLearnHub
            </Link>
            <p className="mt-4 text-indigo-200 max-w-md">
              Empowering students with structured learning roadmaps and comprehensive educational resources from Class 6 to 12.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-indigo-200 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-indigo-200 hover:text-white transition">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-indigo-200 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-indigo-200">
                {/* 📧 support@openlearnhub.com */}
              </li>
              <li className="text-indigo-200">
                {/* 🌐 www.openlearnhub.com */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-indigo-600 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} OpenLearnHub. All rights reserved.</p>
          <p className="mt-2 text-sm text-indigo-300">
            Designed with ❤️ for young learners
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
