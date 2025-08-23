import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-indigo-100 py-8 text-center">
      <p>© {new Date().getFullYear()} OpenLearnHub. All rights reserved.</p>
      <p className="mt-2 text-sm text-indigo-300">
        Designed with ❤️ for young learners
      </p>
    </footer>
  )
}

export default Footer
