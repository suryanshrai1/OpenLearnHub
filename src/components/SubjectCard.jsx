import React from 'react';

const SubjectCard = ({ grade }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl p-6 border border-indigo-100 transition-all duration-300">
      <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Class {grade}</h3>
      <ul className="text-gray-700 space-y-2 text-sm">
        <li>📘 Mathematics</li>
        <li>🔬 Science</li>
        <li>🌍 Social Studies</li>
        <li>📗 English</li>
        <li>💬 Language</li>
      </ul>
      <div className="flex justify-center">
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Explore Class {grade}
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
