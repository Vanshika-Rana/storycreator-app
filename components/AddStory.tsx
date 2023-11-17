// components/AddStoryForm.tsx
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Check if Supabase URL or API Key is missing and throw an error if so
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or API Key is missing');
}

// Create a Supabase client using the retrieved URL and API Key
const supabase = createClient(supabaseUrl, supabaseKey);

interface AddStoryFormProps {
  onAdd: () => void;
}

const AddStoryForm: React.FC<AddStoryFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddStory = async () => {
    try {
      if (title && content) {
        const { data, error } = await supabase
          .from("stories")
          .upsert([{ title, content }]);

        if (error) {
          throw error;
        }

        // Clear the form and trigger the parent component to refresh the story list
        setTitle("");
        setContent("");
        onAdd();
      }
    } catch (error : any) {
      console.error("Error adding story:", error.message);
    }
  };

  return (
    <div>
      <h2>Add New Story</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddStory}>
          Add Story
        </button>
      </form>
    </div>
  );
};

export default AddStoryForm;
