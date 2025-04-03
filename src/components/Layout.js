// src/components/Layout.tsx
'use client'
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';


const Layout = ({ 
  children, 
  title = 'Uncovering the True Africa', 
  description = 'Discover the known and hidden potential of Africa'
}) => {
  return (
    <>
      <Seo title={title} description={description} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;