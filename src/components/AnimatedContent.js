'use client';
import { motion } from 'framer-motion';
import Image from "next/image";

function AnimatedContent({ topic }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image 
            src={topic.imageUrl} 
            alt={topic.title}
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <motion.span 
            className={`inline-block px-4 py-1 text-sm font-medium rounded-full mb-4 ${
              topic.category === 'known' ? 'bg-blue-500' : 'bg-amber-500'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {topic.category === 'known' ? 'Known Potential' : 'Hidden Potential'}
          </motion.span>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {topic.title}
          </motion.h1>
          
          <motion.div 
            className={`w-20 h-1 ${
              topic.category === 'known' ? 'bg-blue-500' : 'bg-amber-500'
            } mb-6`}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="max-w-2xl text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {topic.shortDescription}
          </motion.p>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                {topic.fullDescription}
              </p>
              
              {/* Key Facts/Highlights Section */}
              {renderDetailsSection(topic)}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper function to render appropriate details based on topic structure
function renderDetailsSection(topic) {
  const details = topic.details;
  if (!details) return null;
  
  return (
    <div className="mt-12">
      {renderListSection(details.highlights || details.keyFacts || details.keyHighlights, "Key Facts & Highlights", "bg-blue-50")}
      {renderListSection(details.implications || details.impact || details.keyConsiderations, "Implications & Considerations", "bg-gray-50")}
      {renderListSection(details.businessOpportunities || details.strategicBusinessOpportunities, "Business Opportunities", "bg-green-50")}
      {renderListSection(details.callToAction || details.actionPoints, "Call to Action", "bg-amber-50")}
      {renderListSection(details.significantAdvances, "Significant Advances", "bg-purple-50")}
      {renderListSection(details.criticalPathways, "Critical Pathways", "bg-indigo-50")}
      {renderListSection(details.navigatingThePolycrisis, "Navigating the Polycrisis", "bg-teal-50")}
      {renderListSection(details.strategicImportance, "Strategic Importance", "bg-cyan-50")}
      {renderListSection(details.pathwaysOut, "Pathways Out", "bg-red-50")}
    </div>
  );
}

// Helper function to render a list section with a title
function renderListSection(items, title, bgColor) {
  if (!items || items.length === 0) return null;
  
  return (
    <motion.div 
      className={`p-6 rounded-lg mb-8 ${bgColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default AnimatedContent;
