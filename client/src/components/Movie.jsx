import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Auth from '../utils/auth';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = Auth;

  const saveMovie = () => {
    if (user?.email) {
      // Generate a unique key for the saved movie based on its ID
      const movieKey = `movie_${item.id}`;

      // Check if the movie is already saved
      if (localStorage.getItem(movieKey)) {
        // If it's already saved, remove it
        localStorage.removeItem(movieKey);
        setLike(false);
        setSaved(false);
      } else {
        // If it's not saved, save it
        localStorage.setItem(movieKey, JSON.stringify(item));
        setLike(true);
        setSaved(true);
      }
    } else {
      alert('Please log in to save a movie to Saved Movies');
    }
  };

  // Check if the movie is already saved when the component mounts
  const movieKey = `movie_${item.id}`;
  useEffect(() => {
    if (localStorage.getItem(movieKey)) {
      setLike(true);
      setSaved(true);
    }
  }, [movieKey]);

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
