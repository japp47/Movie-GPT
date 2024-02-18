import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { useEffect } from 'react';
import { addUpcomingMovie } from '../utils/movieSlice';

const useUpcomingMovies = () => {
const dispatch = useDispatch(); 

const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
const getUpcomingMovies = async() => {
const data = await fetch(
'https://api.themoviedb.org/3/movie/upcoming?page=1', 
API_OPTION
);
const json = await data.json();
dispatch(addUpcomingMovie(json.results));
};
useEffect(()=>{
  !upcomingMovies && getUpcomingMovies();
},[]);
}

export default useUpcomingMovies;