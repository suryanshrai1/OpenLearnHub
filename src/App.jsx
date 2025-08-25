import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
import PlatformStats from './components/PlatformStats'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Auth from './components/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import SubjectList from './components/SubjectList'
import SubjectDetail from './components/SubjectDetail'
import About from './components/About'
import Contact from './components/Contact'

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
                <WhatMakesUsDifferent />
                <PlatformStats />
                <HowItWorks />
              </>
            } />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/classes" element={
              <ProtectedRoute>
                <Classes />
              </ProtectedRoute>
            } />
            <Route path="/class/:classId" element={
              <ProtectedRoute>
                <SubjectList />
              </ProtectedRoute>
            } />
            <Route path="/class/:classId/subject/:subjectId" element={
              <ProtectedRoute>
                <SubjectDetail />
              </ProtectedRoute>
            } />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
