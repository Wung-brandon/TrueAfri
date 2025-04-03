// src/components/Card.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Card = ({ topic, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative h-64">
        <Image 
          src={topic.imageUrl} 
          alt={topic.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
            topic.category === 'known' ? 'bg-blue-500' : 'bg-amber-500'
          } text-white mb-2`}>
            {topic.category === 'known' ? 'Known Potential' : 'Hidden Potential'}
          </span>
          <h3 className="text-xl font-bold text-white">{topic.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4">{topic.shortDescription}</p>
        <Link href={`/${topic.slug}`} legacyBehavior>
          <a className="inline-block mt-2 text-amber-600 hover:text-amber-800 font-medium transition-colors">
            Learn more →
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;