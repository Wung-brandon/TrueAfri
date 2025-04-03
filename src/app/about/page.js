'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { authorImg } from '@/utils/images';
import Link from 'next/link';

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-500">
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')]"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Myself
          </motion.h1>
          
          <motion.div 
            className="w-20 h-1 bg-white mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="max-w-2xl text-lg sm:text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Africa Enabler, African Diaspora Scholar, Professor of Development Economics
          </motion.p>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
          >
            {/* Image */}
            <div className="w-full lg:w-2/5">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={authorImg}
                  alt="Ransom Lekunze" 
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-amber-600/10"></div>
              </div>
            </div>
            
            {/* Text */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ransom Lekunze (PhD)</h2>
              <div className="w-16 h-1 bg-amber-500 mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-6">
                Africa Enabler, African Diaspora Scholar, Professor of Development Economics at DIS Denmark, and a Consultant at Prominds Consulting.
              </p>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect With Me</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-amber-600 font-medium mr-2">Social Media:</span>
                    <div className="flex flex-col">
                      <Link href="https://x.com/RLTrueAfrica" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Twitter/X: @RLTrueAfrica</Link>
                      <Link href="https://www.facebook.com/profile.php?id=61574483563524" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</Link>
                      <Link href="https://www.instagram.com/rltrueafrica/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram: @rltrueafrica</Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-amber-600 font-medium mr-2">Email:</span>
                    <Link href="mailto:ransomlek@yahoo.com" className="text-blue-600 hover:underline">ransomlek@yahoo.com</Link>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-amber-600 font-medium mr-2">Tel:</span>
                    <div>
                      <p>+46 739 397 478 or +45 9146 1372</p> 
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;