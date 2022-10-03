import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, apiImageBaseUrl} from '../../Constants/Constants'

function Banner() {

  const [trending, setTrending] = useState();

  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setTrending(() => {
        const randomIndex = Math.floor(Math.random() * response.data.results.length)
        console.log(response.data.results);

        if(randomIndex >= 0 && randomIndex < 20) {
          return response.data.results[randomIndex]
        }
        else {
          return response.data.results[0]
        }
      })
    });
  }, [])

  return (
    <div className="banner" style={{backgroundImage: `url(${trending ? apiImageBaseUrl + '/' + trending.backdrop_path : ""})`}}>
      <div className="banner-content">
        <h1 className="banner-title">{trending ? trending.original_title || trending.name : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">Add to list</button>
        </div>
        <p className='banner-description'>{trending ? trending.overview : ""}</p>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner