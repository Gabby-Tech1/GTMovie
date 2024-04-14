import React from 'react'
import Main from '../Components/Main'
import MovieRows from '../Components/MovieRows'
import request from '../Request'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Main/>
        <MovieRows rowID="1" title="Up Coming" fetchURL={request.requestUpcoming}/>
        <MovieRows rowID="2" title="Popular" fetchURL={request.requestPopular}/>
        <MovieRows rowID="3" title="Trending" fetchURL={request.requestTrending}/>
        <MovieRows rowID="4" title="Horror" fetchURL={request.requestHorror}/>
        <MovieRows rowID="5" title="Cartoon" fetchURL={request.requestCartoon}/>
        <MovieRows rowID="6" title="Top Rated" fetchURL={request.requestTopRated}/>
        <Footer/>
    </div>
  )
}

export default Home