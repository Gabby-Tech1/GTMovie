import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios'
import { BiPlay } from 'react-icons/bi'

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    console.log(movie)

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str
        }
    }


  return (
    <div className='w-full h-[650px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[650px] bg-gradient-to-r from-black/90'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[30%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4 flex'>
                    <button className='border rounded-full border-cyan-300 text-black hover:bg-transparent hover:text-white group bg-cyan-300 py-2 px-5 flex duration-500 ease-in-out'><BiPlay className='text-black text-xl group-hover:text-white'/>Play</button>
                    <button className='border rounded-full border-cyan-300 text-white  py-2 px-5 ml-4 hover:bg-cyan-400 hover:border-none hover:text-black duration-500'>Watch Later</button>
                </div>
                <p className='text-gray-400'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300 '>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>

    </div>
  )
}

export default Main