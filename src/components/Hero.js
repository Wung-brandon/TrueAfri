'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import africaImg from "@/assets/hero.jpg"


const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image 
          src={africaImg} 
          alt="Africa" 
          layout='fill'// Use fill to cover the entire container
          className="object-cover w-full" // Maintain aspect ratio
          priority // Load the image with high priority
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uncovering the True Africa
        </motion.h1>
        
        <motion.div 
          className="w-20 h-1 bg-amber-500 mb-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.p 
          className="max-w-2xl text-lg sm:text-xl font-light mb-8 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Beyond the stereotypes lies a continent of immense potential and opportunity. 
          Discover Africa&apos;s known strengths and hidden treasures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            href="#known" 
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors duration-300"
          >
            Start Reading
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;