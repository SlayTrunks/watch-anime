import React, { useEffect,useState } from 'react'
import { useParams,Link, NavLink } from 'react-router-dom'
import Header from './Header'
import Loading from './Loading'
// import Video from './Video'

const Watch = () => {
    const [tada,setTada] = useState([])
    const {id} =useParams()
    const [loading,setloading] = useState(true)
    const url = `https://gogoanime.consumet.stream/anime-details/${id}`

    


    async function fetchData(){
        
        try {
            const response = await fetch(url)
            const data = await response.json()
            setTada(data)
            setloading(false)
            
            
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
    if(loading){
        return <Loading/>
    }
    
    else{

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

}

export default Watch
