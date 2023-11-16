import React from "react";
import Story from "./Story";

interface StoryListProps{
    stories:{
        id:number;
        title:string;
        content:string;

    }[];
    onEdit:(
        editedStory:{
            id:number;
            title:string;
            content:string;
        }
    ) => void;
}

const StoryList: React.FC<StoryListProps> = ({stories, onEdit}) =>{
    return(
        <div>
      {stories.map((story) => (
        <Story key={story.id} story={story} onEdit={onEdit} />
      ))}
    </div>
    );
};

export default StoryList;