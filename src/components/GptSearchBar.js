import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from "../utils/languageConstant"
import openai from '../utils/openai';
import { API_OPTION } from '../utils/constants';
import { addGptResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const searchMovie = async(movie) => {
     const data = await 
     fetch(
      "https://api.themoviedb.org/3/search/movie?query="
     +movie+
     "&include_adult=false&language=en-US&page=1",
     API_OPTION
     );
     const json = await data.json();

     return json.results;
  };

  const handleGptSearchClick = async () =>{
   
    setIsLoading(true);

    const gptQuery = "Act as a Movie Recommendation System and suggest few movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar3, Sholay, Don, Koi Mil Gaya, Golmaal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    
    if(!gptResults.choices){
      setIsLoading(false);
      return;
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    
    const promiseArray = gptMovies.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptResult({movieNames: gptMovies, movieResults: tmdbResults}));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    
  
  }
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form className= "w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={searchText}
            type="text" 
            className="p-4 m-4 col-span-9" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
            className= " py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
            onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
        {isLoading && (
        <div className='mt-4'>
          {/* Render Tailwind CSS loading spinner when isLoading is true */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default GptSearchBar;