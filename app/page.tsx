"use client"

import { getStories, updateStory } from "@/services/storyServices";
import React, { useEffect, useState } from "react";


import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
const Home: React.FC = () =>{
  

return (
<div className="flex flex-col min-h-screen">
  <Navbar/>
  <Hero/>
  <footer className="mt-auto py-4 text-center text-black font-bold">
    Made with <span className="text-pink-500">&hearts;</span> by Vanshika
  </footer>
</div>

);

}

export default Home;