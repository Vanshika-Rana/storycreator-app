"use client"

import { getStories, updateStory } from "@/services/storyServices";
import React, { useEffect, useState } from "react";
import StoryList from "@/components/StoryList";
const Home: React.FC = () =>{
  const [stories,setStories] = useState<{
    id:number;
  title:string;
content:string;
}[]>([]);

useEffect(() => {
  const fetchStories = async() =>{
    try{
      const storiesData = await getStories();
      setStories(storiesData||[]);
    } catch(error : any){
      console.error("Fetched Error: ", error.message);
    }
  };
  fetchStories();
},[]);

const handleEdit = async(editedStory:{
  id:number;
  title:string;
  content:string;
}) => {
  const updatedStories = stories.map((s)=> s.id === editedStory.id ? editedStory : s);
  setStories(updatedStories);

  try{
    await updateStory(editedStory.id, editedStory);
  } catch(error : any){
    console.error("Error updating story:", error.message);
  }
};

return (
  <div>
    <h1>Interactive Storytelling App</h1>
    <StoryList stories={stories} onEdit={handleEdit} />
  </div>
);

}

export default Home;