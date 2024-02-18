import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { useEffect } from 'react';
import { addTopRatedMovie } from '../utils/movieSlice';

const useTopRatedMovies = () => {
const dispatch = useDispatch(); 
const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
const getTopRatedMovies = async() => {
const data = await fetch(
'https://api.themoviedb.org/3/movie/top_rated?page=1', 
API_OPTION
);
const json = await data.json();
dispatch(addTopRatedMovie(json.results));
};
useEffect(()=>{
 !topRatedMovies && getTopRatedMovies();
},[]);
}

export default useTopRatedMovies;
