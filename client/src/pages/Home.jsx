import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'

const Home = () => {
  return (
    <>
        <Main />
        <div className='m-2'>
          <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
          <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
          <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
          <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        </div>
    </>
  )
}

export default Home