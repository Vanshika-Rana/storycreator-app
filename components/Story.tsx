"use client"

import React, { ChangeEvent, useState } from "react";

interface StoryProps{
    story:{
        id:number;
        title:string;
        content:string;
    };
    onEdit:(
        editedStory:{
            id:number;
            title:string;
            content:string;
        }
    ) => void;
}

const Story: React.FC<StoryProps> = ({story, onEdit}) =>{
    const [editedStory, setEditedStory] = useState(story);
    const handleEdit =()=>{
        onEdit(editedStory);
    }

    const handleContentChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setEditedStory({...editedStory, content: e.target.value});
    };
    
    return(
        <div>
            <h2>{story.title}</h2>
            <p>{story.content}</p>
            <textarea value={editedStory.content} onChange={handleContentChange}/>
            <button onClick={handleEdit}>Save Edit</button>
        </div>
    );
}

export default Story;
