
"use client"
// components/Navbar.tsx

// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* Logo */}
        <div className="text-purple-500 text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 ease-in-out hover:tracking-wider cursor-pointer">
          ✨ Story Sphere ✨
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


