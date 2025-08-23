import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Auth from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            <Route path="/classes" element={<Classes />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
