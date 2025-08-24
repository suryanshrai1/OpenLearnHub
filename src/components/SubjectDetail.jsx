import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const SubjectDetail = () => {
  const { classId, subjectId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [selectedChapter, setSelectedChapter] = useState(null)

  // Subject data mapping
  const subjectData = {
    mathematics: {
      name: 'Mathematics',
      icon: '🔢',
      color: 'from-blue-500 to-cyan-500',
      description: 'Numbers, algebra, geometry, and basic mathematical concepts',
      chapters: [
        {
          id: 1,
          name: 'Knowing Our Numbers',
          topics: ['Place Value', 'Number System', 'Rounding Off', 'Estimation'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '2.3 MB', url: 'https://www.learncbse.in/knowing-our-numbers-class-6-notes/' },
            { name: 'Practice Questions', type: 'PDF', size: '1.8 MB', url: 'https://byjus.com/ncert-solutions-class-6-maths/chapter-1-knowing-our-numbers/' },
            { name: 'Formula Sheet', type: 'PDF', size: '0.9 MB', url: '#' },
            { name: 'Solved Examples', type: 'PDF', size: '1.5 MB', url: '#' }
          ],
          videos: [
            { name: 'Introduction to Numbers', duration: '15:30', url: 'https://www.youtube.com/watch?v=i8EI_ZMHTAg' },
            { name: 'Place Value System', duration: '18:45', url: '#' },
            { name: 'Rounding and Estimation', duration: '12:20', url: '#' },
            { name: 'Practice Problems', duration: '20:15', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: 'https://www.scribd.com/document/558530884/Cbse-Class-6-Ncert-Books-Math-Chapter-1-Knowing-Our-Numbers' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Extra Questions', publisher: 'MTG', url: '#' }
          ]
        },
        {
          id: 2,
          name: 'Whole Numbers',
          topics: ['Natural Numbers', 'Properties', 'Operations', 'Patterns'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '2.1 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '1.6 MB', url: '#' },
            { name: 'Properties Summary', type: 'PDF', size: '0.7 MB', url: '#' },
            { name: 'Number Line Activities', type: 'PDF', size: '1.2 MB', url: '#' }
          ],
          videos: [
            { name: 'Whole Numbers Introduction', duration: '14:20', url: '#' },
            { name: 'Properties of Whole Numbers', duration: '16:35', url: '#' },
            { name: 'Number Patterns', duration: '11:15', url: '#' },
            { name: 'Interactive Exercises', duration: '18:40', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Concept Maps', publisher: 'MTG', url: '#' }
          ]
        },
        {
          id: 3,
          name: 'Playing with Numbers',
          topics: ['Factors', 'Multiples', 'Prime Numbers', 'Divisibility'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '2.5 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '2.0 MB', url: '#' },
            { name: 'Factors and Multiples', type: 'PDF', size: '1.1 MB', url: '#' },
            { name: 'Prime Factorization', type: 'PDF', size: '1.8 MB', url: '#' }
          ],
          videos: [
            { name: 'Factors and Multiples', duration: '17:10', url: '#' },
            { name: 'Prime Numbers', duration: '13:45', url: '#' },
            { name: 'Divisibility Rules', duration: '15:30', url: '#' },
            { name: 'Problem Solving', duration: '22:15', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Advanced Problems', publisher: 'MTG', url: '#' }
          ]
        },
        {
          id: 4,
          name: 'Basic Geometrical Ideas',
          topics: ['Points', 'Lines', 'Angles', 'Shapes'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '2.8 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '2.3 MB', url: '#' },
            { name: 'Geometric Constructions', type: 'PDF', size: '1.6 MB', url: '#' },
            { name: 'Visual Aids', type: 'PDF', size: '1.9 MB', url: '#' }
          ],
          videos: [
            { name: 'Basic Geometric Concepts', duration: '19:25', url: '#' },
            { name: 'Lines and Angles', duration: '16:50', url: '#' },
            { name: 'Geometric Shapes', duration: '14:30', url: '#' },
            { name: 'Practical Applications', duration: '21:10', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Geometry Kit', publisher: 'MTG', url: '#' }
          ]
        },
        {
          id: 5,
          name: 'Understanding Elementary Shapes',
          topics: ['Triangles', 'Quadrilaterals', 'Circles', '3D Shapes'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '3.1 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '2.5 MB', url: '#' },
            { name: 'Shape Properties', type: 'PDF', size: '1.8 MB', url: '#' },
            { name: '3D Models Guide', type: 'PDF', size: '2.2 MB', url: '#' }
          ],
          videos: [
            { name: 'Types of Triangles', duration: '18:15', url: '#' },
            { name: 'Quadrilaterals', duration: '20:30', url: '#' },
            { name: 'Circles and Their Properties', duration: '16:45', url: '#' },
            { name: '3D Shapes Exploration', duration: '24:20', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Shape Recognition', publisher: 'MTG', url: '#' }
          ]
        },
        {
          id: 6,
          name: 'Integers',
          topics: ['Negative Numbers', 'Number Line', 'Operations', 'Applications'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '2.4 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '2.0 MB', url: '#' },
            { name: 'Integer Operations', type: 'PDF', size: '1.4 MB', url: '#' },
            { name: 'Real-life Examples', type: 'PDF', size: '1.7 MB', url: '#' }
          ],
          videos: [
            { name: 'Introduction to Integers', duration: '16:40', url: '#' },
            { name: 'Integer Operations', duration: '19:15', url: '#' },
            { name: 'Number Line Representation', duration: '14:25', url: '#' },
            { name: 'Word Problems', duration: '18:50', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Integer Applications', publisher: 'MTG', url: '#' }
          ]
        }
      ]
    },
    science: {
      name: 'Science',
      icon: '🔬',
      color: 'from-green-500 to-emerald-500',
      description: 'Physics, chemistry, and biology fundamentals',
      chapters: [
        {
          id: 1,
          name: 'Food: Where Does It Come From?',
          topics: ['Sources of Food', 'Plant Products', 'Animal Products', 'Food Chain'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '2.8 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '2.2 MB', url: '#' },
            { name: 'Food Sources Chart', type: 'PDF', size: '1.3 MB', url: '#' },
            { name: 'Food Chain Diagram', type: 'PDF', size: '1.8 MB', url: '#' }
          ],
          videos: [
            { name: 'Introduction to Food Sources', duration: '16:20', url: '#' },
            { name: 'Plant and Animal Products', duration: '19:15', url: '#' },
            { name: 'Food Chain and Web', duration: '14:40', url: '#' },
            { name: 'Food Production', duration: '21:30', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Science Experiments', publisher: 'MTG', url: '#' }
          ]
        },
        {
          id: 2,
          name: 'Components of Food',
          topics: ['Nutrients', 'Vitamins', 'Minerals', 'Balanced Diet'],
          documents: [
            { name: 'Chapter Notes', type: 'PDF', size: '3.2 MB', url: '#' },
            { name: 'Practice Questions', type: 'PDF', size: '2.6 MB', url: '#' },
            { name: 'Nutrient Chart', type: 'PDF', size: '1.9 MB', url: '#' },
            { name: 'Diet Planning Guide', type: 'PDF', size: '2.1 MB', url: '#' }
          ],
          videos: [
            { name: 'Food Components Overview', duration: '18:45', url: '#' },
            { name: 'Nutrients and Their Functions', duration: '22:10', url: '#' },
            { name: 'Balanced Diet Planning', duration: '16:35', url: '#' },
            { name: 'Health and Nutrition', duration: '19:20', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' },
            { name: 'Previous Year Papers', publisher: 'Oswaal', url: '#' },
            { name: 'Nutrition Guide', publisher: 'MTG', url: '#' }
          ]
        }
      ]
    },
    english: {
      name: 'English',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      description: 'Grammar, literature, and communication skills',
      chapters: [
        {
          id: 1,
          name: 'Reading Comprehension',
          topics: ['Main Idea', 'Supporting Details', 'Context Clues', 'Inference'],
          documents: [
            { name: 'Reading Passages', type: 'PDF', size: '1.8 MB', url: '#' },
            { name: 'Comprehension Questions', type: 'PDF', size: '1.2 MB', url: '#' },
            { name: 'Vocabulary List', type: 'PDF', size: '0.8 MB', url: '#' }
          ],
          videos: [
            { name: 'Reading Strategies', duration: '16:20', url: '#' },
            { name: 'Comprehension Techniques', duration: '14:15', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Practice Workbook', publisher: 'Arihant', url: '#' }
          ]
        },
        {
          id: 2,
          name: 'Grammar Fundamentals',
          topics: ['Parts of Speech', 'Sentence Structure', 'Tenses', 'Articles'],
          documents: [
            { name: 'Grammar Rules', type: 'PDF', size: '2.1 MB', url: '#' },
            { name: 'Practice Exercises', type: 'PDF', size: '1.5 MB', url: '#' }
          ],
          videos: [
            { name: 'Parts of Speech', duration: '18:30', url: '#' },
            { name: 'Sentence Types', duration: '15:45', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Grammar Practice', publisher: 'Arihant', url: '#' }
          ]
        }
      ]
    },
    'social-studies': {
      name: 'Social Studies',
      icon: '🌍',
      color: 'from-orange-500 to-red-500',
      description: 'History, geography, and civics',
      chapters: [
        {
          id: 1,
          name: 'Ancient Civilizations',
          topics: ['Indus Valley', 'Vedic Period', 'Mauryan Empire', 'Gupta Empire'],
          documents: [
            { name: 'Historical Timeline', type: 'PDF', size: '2.5 MB', url: '#' },
            { name: 'Map Activities', type: 'PDF', size: '1.8 MB', url: '#' }
          ],
          videos: [
            { name: 'Indus Valley Civilization', duration: '20:15', url: '#' },
            { name: 'Ancient Indian History', duration: '22:30', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'History Atlas', publisher: 'Arihant', url: '#' }
          ]
        },
        {
          id: 2,
          name: 'Geography Basics',
          topics: ['Maps and Globes', 'Continents', 'Oceans', 'Climate'],
          documents: [
            { name: 'World Map', type: 'PDF', size: '3.2 MB', url: '#' },
            { name: 'Geography Notes', type: 'PDF', size: '2.0 MB', url: '#' }
          ],
          videos: [
            { name: 'Understanding Maps', duration: '17:45', url: '#' },
            { name: 'World Geography', duration: '19:20', url: '#' }
          ],
          books: [
            { name: 'NCERT Textbook', publisher: 'NCERT', url: '#' },
            { name: 'Geography Atlas', publisher: 'Arihant', url: '#' }
          ]
        }
      ]
    },
    hindi: {
      name: 'Hindi',
      icon: '🇮🇳',
      color: 'from-indigo-500 to-purple-500',
      description: 'Hindi grammar, literature, and language skills',
      chapters: [
        {
          id: 1,
          name: 'हिंदी व्याकरण',
          topics: ['संज्ञा', 'सर्वनाम', 'विशेषण', 'क्रिया'],
          documents: [
            { name: 'व्याकरण नियम', type: 'PDF', size: '2.0 MB', url: '#' },
            { name: 'अभ्यास प्रश्न', type: 'PDF', size: '1.5 MB', url: '#' }
          ],
          videos: [
            { name: 'संज्ञा और सर्वनाम', duration: '16:30', url: '#' },
            { name: 'विशेषण और क्रिया', duration: '18:15', url: '#' }
          ],
          books: [
            { name: 'NCERT पाठ्यपुस्तक', publisher: 'NCERT', url: '#' },
            { name: 'हिंदी व्याकरण', publisher: 'Arihant', url: '#' }
          ]
        },
        {
          id: 2,
          name: 'कहानी और कविता',
          topics: ['कहानी पढ़ना', 'कविता समझना', 'शब्दार्थ', 'प्रश्नोत्तर'],
          documents: [
            { name: 'कहानी संग्रह', type: 'PDF', size: '2.8 MB', url: '#' },
            { name: 'कविता संग्रह', type: 'PDF', size: '2.2 MB', url: '#' }
          ],
          videos: [
            { name: 'कहानी पढ़ने की कला', duration: '19:45', url: '#' },
            { name: 'कविता समझना', duration: '17:20', url: '#' }
          ],
          books: [
            { name: 'NCERT पाठ्यपुस्तक', publisher: 'NCERT', url: '#' },
            { name: 'हिंदी साहित्य', publisher: 'Arihant', url: '#' }
          ]
        }
      ]
    }
  }

  // Debug logging
  console.log('SubjectDetail - classId:', classId)
  console.log('SubjectDetail - subjectId:', subjectId)
  console.log('SubjectDetail - subjectId.toLowerCase():', subjectId?.toLowerCase())
  console.log('SubjectDetail - Available subject keys:', Object.keys(subjectData))
  console.log('SubjectDetail - Looking for subject with key:', subjectId?.toLowerCase())

  const subject = subjectData[subjectId?.toLowerCase()]

  // Debug alert to see what's happening
  console.log('SubjectDetail - Final subject found:', subject)
  if (subject) {
    console.log('SubjectDetail - Subject name:', subject.name)
  }

  if (!subject) {
    alert(`Subject not found! Looking for: ${subjectId} (lowercase: ${subjectId?.toLowerCase()})\nAvailable subjects: ${Object.keys(subjectData).join(', ')}`)
    return (
      <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject not found</h1>
          <p className="text-gray-600 mb-4">Looking for: {subjectId}</p>
          <p className="text-gray-600 mb-4">Available: {Object.keys(subjectData).join(', ')}</p>
          <button
            onClick={() => navigate(`/class/${classId}`)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Subjects
          </button>
        </div>
      </div>
    )
  }

  const handleResourceClick = (url, resourceType, resourceName) => {
    console.log(`Resource clicked: ${resourceType} - ${resourceName}`)
    console.log(`URL: ${url}`)
    
    // Check if URL is valid and not just a placeholder
    if (url && url !== '#' && url.startsWith('http')) {
      // Open valid URLs in new tab
      window.open(url, '_blank', 'noopener,noreferrer')
      console.log(`Opening ${resourceType}: ${resourceName} in new tab`)
    } else {
      // Show alert for placeholder links
      alert(`${resourceType}: ${resourceName}\n\nThis resource will be available soon!`)
      console.log(`Placeholder link clicked for ${resourceType}: ${resourceName}`)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <button
              onClick={() => navigate(`/class/${classId}`)}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Subjects
            </button>
          </div>
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${subject.color} text-white text-4xl mb-6`}>
            {subject.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {subject.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subject.description}
          </p>
        </div>

        {/* Chapters Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold">Chapter-wise Resources</h2>
            <p className="text-indigo-100">Access study materials, videos, and books for each chapter</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Chapter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Topics</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Documents</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Video Lectures</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Books</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subject.chapters.map((chapter) => (
                  <tr key={chapter.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-bold text-indigo-600">{chapter.id}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{chapter.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {chapter.topics.map((topic, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {chapter.documents.map((doc, index) => (
                          <button
                            key={index}
                            onClick={() => handleResourceClick(doc.url, 'Document', doc.name)}
                            className="block text-left text-sm text-indigo-600 hover:text-indigo-800 transition"
                          >
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-xs text-gray-500">{doc.type} • {doc.size}</div>
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {chapter.videos.map((video, index) => (
                          <button
                            key={index}
                            onClick={() => handleResourceClick(video.url, 'Video', video.name)}
                            className="block text-left text-sm text-indigo-600 hover:text-indigo-800 transition"
                          >
                            <div className="font-medium">{video.name}</div>
                            <div className="text-xs text-gray-500">⏱️ {video.duration}</div>
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {chapter.books.map((book, index) => (
                          <button
                            key={index}
                            onClick={() => handleResourceClick(book.url, 'Book', book.name)}
                            className="block text-left text-sm text-indigo-600 hover:text-indigo-800 transition"
                          >
                            <div className="font-medium">{book.name}</div>
                            <div className="text-xs text-gray-500">📚 {book.publisher}</div>
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedChapter(chapter)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chapter Detail Modal */}
        {selectedChapter && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Chapter {selectedChapter.id}: {selectedChapter.name}
                  </h3>
                  <button
                    onClick={() => setSelectedChapter(null)}
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Documents */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-3">📄 Documents</h4>
                    <div className="space-y-2">
                      {selectedChapter.documents.map((doc, index) => (
                        <button
                          key={index}
                          onClick={() => handleResourceClick(doc.url, 'Document', doc.name)}
                          className="block w-full text-left p-3 bg-white rounded-lg hover:bg-blue-100 transition"
                        >
                          <div className="font-medium text-blue-900">{doc.name}</div>
                          <div className="text-sm text-blue-700">{doc.type} • {doc.size}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Videos */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-3">🎥 Video Lectures</h4>
                    <div className="space-y-2">
                      {selectedChapter.videos.map((video, index) => (
                        <button
                          key={index}
                          onClick={() => handleResourceClick(video.url, 'Video', video.name)}
                          className="block w-full text-left p-3 bg-white rounded-lg hover:bg-green-100 transition"
                        >
                          <div className="font-medium text-green-900">{video.name}</div>
                          <div className="text-sm text-green-700">⏱️ {video.duration}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Books */}
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-3">📚 Books</h4>
                    <div className="space-y-2">
                      {selectedChapter.books.map((book, index) => (
                        <button
                          key={index}
                          onClick={() => handleResourceClick(book.url, 'Book', book.name)}
                          className="block w-full text-left p-3 bg-white rounded-lg hover:bg-purple-100 transition"
                        >
                          <div className="font-medium text-purple-900">{book.name}</div>
                          <div className="text-sm text-purple-700">📚 {book.publisher}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SubjectDetail
