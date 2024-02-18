import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10 md:fixed'>
        <img className='h-screen object-cover md:w-screen '
            src = {BG_URL} 
            alt="BackGround"
          />
        </div>
        <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>
        
    </div>
  )
}

export default GptSearch;