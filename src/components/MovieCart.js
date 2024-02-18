import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCart = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 ">
      <img className="rounded-md hover:scale-125 transition duration-500 cursor-pointer object-cover"
      alt = "Movie Card"
      src = {IMG_CDN + posterPath}
      />
    </div>
  )
}

export default MovieCart