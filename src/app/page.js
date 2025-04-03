
'use client'
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { topics } from "@/data/topicsData";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SearchBar from "@/components/Searchbar";
import { useRouter } from "next/navigation";
// import { Topic } from "@/types";

const ITEMS_PER_PAGE = 6;

const Home = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(topics);
  
  // Load more state
  const [visibleKnownCount, setVisibleKnownCount] = useState(ITEMS_PER_PAGE);
  const [visibleHiddenCount, setVisibleHiddenCount] = useState(ITEMS_PER_PAGE);

  // Filter topics by category
  const knownTopics = filteredTopics.filter(topic => topic.category === 'known');
  const hiddenTopics = filteredTopics.filter(topic => topic.category === 'hidden');

  const router = useRouter()

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTopics(topics);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = topics.filter(topic => 
      topic.title.toLowerCase().includes(searchTermLower) ||
      topic.category.toLowerCase().includes(searchTermLower) ||
      topic.shortDescription.toLowerCase().includes(searchTermLower) ||
      topic.fullDescription.toLowerCase().includes(searchTermLower)
    );
    
    setFilteredTopics(filtered);
    
    // Reset visible counts when searching
    setVisibleKnownCount(ITEMS_PER_PAGE);
    setVisibleHiddenCount(ITEMS_PER_PAGE);
  }, [searchTerm]);

  // Load more handlers
  const handleLoadMoreKnown = () => {
    setVisibleKnownCount(prev => prev + ITEMS_PER_PAGE);
  };

  const handleLoadMoreHidden = () => {
    setVisibleHiddenCount(prev => prev + ITEMS_PER_PAGE);
  };

  // Visible topics
  const visibleKnownTopics = knownTopics.slice(0, visibleKnownCount);
  const visibleHiddenTopics = hiddenTopics.slice(0, visibleHiddenCount);

  return (
    <Layout>
      <Hero />
      
      {/* Search Bar */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            resultsCount={filteredTopics.length} 
          />
        </div>
      </div>
      
      {/* Known Potential Section */}
      <section id="known" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
              Known Potential
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Africa&apos;s Recognized Potentials
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              The continent&apos;s well-documented capabilities and assets that are acknowledged globally,
              yet often underestimated and underutilized.
            </p>
          </motion.div>
          
          {knownTopics.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleKnownTopics.map((topic, index) => (
                  <Card key={topic.id} topic={topic} index={index} />
                ))}
              </div>
              
              {visibleKnownCount < knownTopics.length && (
                <div className="mt-12 text-center">
                  <motion.button 
                    onClick={handleLoadMoreKnown}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                    transition-colors duration-300 font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Load More
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No results found in Known Potential category.
            </div>
          )}
        </div>
      </section>
      
      {/* Hidden Potential Section */}
      <section id="hidden" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full mb-3">
              Hidden Potential
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Africa&apos;s Undisclosed Potentials
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              The overlooked capabilities, resources, and opportunities that remain hidden beneath
              stereotypes and misconceptions about the continent.
            </p>
          </motion.div>
          
          {hiddenTopics.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleHiddenTopics.map((topic, index) => (
                  <Card key={topic.id} topic={topic} index={index} />
                ))}
              </div>
              
              {visibleHiddenCount < hiddenTopics.length && (
                <div className="mt-12 text-center">
                  <motion.button 
                    onClick={handleLoadMoreHidden}
                    className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 
                    transition-colors duration-300 font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Load More
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No results found in Hidden Potential category.
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover the True Africa</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Beyond the stereotypes lies a continent of immense potential and opportunity.
              Join us in uncovering Africa&apos;s true story.
            </p>
            <button className="px-8 py-3 bg-white text-amber-800 hover:bg-gray-100 font-medium 
              rounded-full transition-colors duration-300 cursor-pointer"
              onClick={()=> router.push('/article')}
            >
              View Complete Article
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;