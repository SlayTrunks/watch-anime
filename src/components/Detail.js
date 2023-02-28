import React, { useState , useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlinePlayCircle } from 'react-icons/ai';
import Header from './Header';
const Detail = () => {
//    console.log(prop)
const {id} = useParams()
const [tada,setTada] = useState([])


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
  
    return(
        <>
        <Header />
        <div className='full'>
        <div className="movie-card">
  <img className='aniImg' src={tada.animeImg} alt={tada.animeTitle}/>
  <div className="movie-info">
    <h2>{tada.animeTitle}</h2>
    <p><b>Release Date:</b> {tada.releasedDate}</p>
    <br />
    <p><b>Genre:</b> {tada.genres?.map((genre,i)=>{
        return <p key={i}>{genre}</p>
    })}</p>
    <br />
    <p><b>status:</b> {tada.status}</p>
    <br />
    <p><i>{tada.synopsis}</i></p>
    <br />
    <p><b>Total Episodes:</b> {tada.totalEpisodes}</p>
    <br />
    <p><b>Type:</b> {tada.type}</p>
    <br />
    <Link to={`/watch/${id}`}><AiOutlinePlayCircle size={'3rem'} className='ai'  /></Link>
  </div>
</div>
        </div>
        </>
    )
}

export default Detail
