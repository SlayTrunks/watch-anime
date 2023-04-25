import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const Videos = () => {
    const [tada,setTada] = useState()
    const param = useParams()

   console.log(param)
    const url = `https://gogoanime.consumet.stream/vidcdn/watch/${param.ep}`
    // const url = 'https://gogoanime.consumet.stream/vidcdn/watch/naruto-episode-220'
    

    


    async function fetchData(){
        
        try {
            const response = await fetch(url)
            const data = await response.json()
            setTada(data)
            
            
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
        // console.log(tada)
    },[])

    // console.log(tada.sources_bk[0].file);
    console.log(tada?.Referer)
  return (
    <>
    <Header />
    <div className='maintow'>
      <iframe   src={tada?.Referer}  width='80%' height='600'  className='vid'></iframe>
      <div className="too">
        <a href={tada?.sources_bk[0].file} className='btn'>Download</a>
      <a href={tada?.Referer} className='btn'>Full screen</a>
      </div>
      
    </div>
    </>
  )
}

export default Videos
