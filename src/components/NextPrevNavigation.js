// src/components/NextPrevNavigation.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const NextPrevNavigation = ({ prevTopic, nextTopic }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
        <div className="mb-4 md:mb-0">
          {prevTopic && (
            <Link href={`/${prevTopic.slug}`} legacyBehavior>
              <a className="flex items-center group">
                <motion.span 
                  className="mr-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  ←
                </motion.span>
                <span className="text-gray-700 group-hover:text-amber-600">Previous: {prevTopic.title}</span>
              </a>
            </Link>
          )}
        </div>
        
        <div>
          {nextTopic && (
            <Link href={`/${nextTopic.slug}`} legacyBehavior>
              <a className="flex items-center group">
                <span className="text-gray-700 group-hover:text-amber-600">Next: {nextTopic.title}</span>
                <motion.span 
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NextPrevNavigation;