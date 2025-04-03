'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const SearchBar = ({ searchTerm, setSearchTerm, resultsCount }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleClear = () => {
    setSearchTerm('');
  };
  
  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`relative flex items-center rounded-full border ${isFocused ? 'border-amber-500 shadow-md' : 'border-gray-300'} overflow-hidden transition-all duration-300`}>
        <div className="flex-shrink-0 pl-4 pr-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search by title, category, or description..."
          className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-700"
        />
        
        {searchTerm && (
          <button 
            onClick={handleClear}
            className="flex-shrink-0 mr-2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {searchTerm && (
        <motion.div 
          className="mt-2 text-sm text-gray-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {resultsCount === 0 ? (
            "No results found. Try a different search term."
          ) : (
            `Found ${resultsCount} result${resultsCount !== 1 ? 's' : ''}`
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;