import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];

    const {title, overview, id} = mainMovie;

  return (
    <div className='pt-[30%] bg-black md:pt-0 '>
        <VideoTitle title = {title} overview = {overview}/>
        <VideoBg movieId = {id}/>
    </div>
  )
}

export default MainContainer;