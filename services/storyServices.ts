import { createClient,PostgrestResponse,PostgrestSingleResponse } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if(!supabaseUrl || !supabaseKey){
    throw new Error('Supabase URL or API Key is missing');
}

const supabase = createClient(supabaseUrl, supabaseKey);
interface Story{
    id:number;
    title:string;
    content:string;
} 

export const getStories = async(): Promise<Story[] | null> => {
    const {data,error}: PostgrestResponse<Story> = await supabase.from('stories').select('*'); 
   if(error){
    throw error;
   }
   return data;
};

// export const updateStory = async (id: number, newStory: Partial<Story>): Promise<PostgrestSingleResponse<Story> | null> => {
//     const {data,error} : PostgrestSingleResponse<Story> = await supabase.from('stories').update({content: newStory.content}).eq("id",id);
//     if (error) {
//         throw error;
//       }
//       return data || [];
// }

export const updateStory = async (
    id: number,
    newStory: Partial<Story>
  ): Promise<PostgrestSingleResponse<Story | null>> => {
    // Make a request to Supabase to update the content of a story based on its ID
    const { data, error, count, status, statusText } = await supabase
      .from("stories")
      .update({ content: newStory.content })
      .eq("id", id);
  
    // If an error occurs during the request, throw the error
    if (error) {
      throw error;
    }
  
    // Return an object containing the updated data (story) or null if there's no data,
    // along with other response properties such as count, status, and statusText
    return { data: data as Story | null, error, count, status, statusText };
  };