import React, { useEffect,useState } from 'react'
import { useParams,Link, NavLink } from 'react-router-dom'
import Header from './Header'
// import Video from './Video'

const Watch = () => {
    const [tada,setTada] = useState([])
    const {id} =useParams()
    const url = `https://gogoanime.consumet.stream/anime-details/${id}`

    


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
    },[])
    
    const diwas = tada.episodesList

    const dataList = () =>{
        
    }
    // console.log(diwas)
    return(
        <>
        <Header />
        <div className='whole'>
        <h1 className="mainTitle">Select The episode</h1>
        <div>{diwas?.map(diw=>{
        // {setEpisodeId(diw.episodeId)}
            return <button  target='_blank' key={diw.episodeId} className='epBtn'  ><Link className='nope' to={`video/${diw.episodeId}`}>{diw.episodeNum}</Link> </button>
        })}</div>
        </div>
        </>
    )

}

export default Watch
