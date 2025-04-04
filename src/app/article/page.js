'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import africaImg from "@/assets/hero.jpg"
import Layout from '@/components/Layout';
import { topics } from '@/data/topicsData';


const ArticlePage= () => {
  // Group topics by category
  const knownTopics = topics.filter(topic => topic.category === "known");
  // Assuming there's a "hidden" category based on your request
  const hiddenTopics = topics.filter(topic => topic.category === "hidden");

  return (
    <Layout>
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image 
            src={africaImg} 
            alt="Africa" 
            layout='fill'
            className="object-cover w-full"
            priority
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
        </div>
      </div>

      {/* Known Topics Section */}
      <section id="known" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-10 text-center text-gray-900 after:content-[''] after:block 
              after:w-24 after:h-1 after:bg-blue-800 after:mx-auto after:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Known Facts About Africa
            </motion.h2>
            
            <div className="space-y-12">
              {knownTopics.map((topic, index) => (
                <motion.div 
                  key={topic.id}
                  className="border-l-4 border-blue-800 pl-6 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    {index + 1}. {topic.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {topic.fullDescription}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Topics Section */}
      {hiddenTopics.length > 0 && (
        <section id="hidden" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold mb-10 text-center text-gray-900 after:content-[''] after:block 
                after:w-24 after:h-1 after:bg-amber-500 after:mx-auto after:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hidden Treasures of Africa
              </motion.h2>
              
              <div className="space-y-12">
                {hiddenTopics.map((topic, index) => (
                  <motion.div 
                    key={topic.id}
                    className="border-l-4 border-amber-500 pl-6 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                      {index + 1}. {topic.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {topic.fullDescription}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticlePage;