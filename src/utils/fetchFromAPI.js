import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
      maxResults: '100' 
    },
    headers: {
      'X-RapidAPI-Key': 'ab40720e73msh8f9b1966f048e24p197984jsn09fe2325236e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};