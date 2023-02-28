import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Recent = () => {
    const [animeData,setanimeData] = useState()
    const [search,setSearch] = useState('naruto')

    const handleChange = (e) =>{
        const demo = e.target.value
        setSearch(demo)
    }
    const url = `https://gogoanime.consumet.stream/search?keyw=${search}`
    async function fetchData(){
        try {
            const response = await fetch(url)
            const data = await response.json()
            setanimeData(data)
            
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
        
    },[search])
    
    function searchAnime(){
        if(search.length<=0){
            return "Search something"
        }else{
           return ` Search result for ${search}`
        }
    }
    return(
        <>
        <div className="two">
          <h1 className='mainTitle'>{searchAnime()}</h1>  
          <input type="text" onChange={handleChange} value={search} className='smth' />
        </div>
        
        <div className="all">
            {animeData?.map(anime=>{
                return(
                    <Link className="animeCard" key={anime.animeId} to={`card/${anime.animeId}`}>
                    <img key={anime.animeId} src={anime.animeImg} alt="image" className='titleImg' />
                        <h4 className="animeTitle">
                            {anime.animeTitle}
                        </h4>                
</Link>
                )
            })}
            </div>
        </>
    )
    
}

export default Recent