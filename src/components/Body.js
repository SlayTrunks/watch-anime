import React, { useEffect, useState } from 'react'
// import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Detail from './Detail'
import Header from './Header'
import Loading from './Loading'
// import Header from './Header'
// import Header from './Header'
// import Genre from './Genre'

const Body = ({prop}) => {
    const [animeData,setanimeData] = useState()
   const [swi,setSwi] = useState('')
   const [search,setSearch] = useState()
   const [loading,setLoading] = useState(true)


    const url = search?.length ==  undefined || search?.length <=0  ?  'https://gogoanime.consumet.stream/recent-release' :   `https://gogoanime.consumet.stream/search?keyw=${search}`
   

    async function fetchData(){
        try {
            const response = await fetch(url)
            const data = await response.json()
            setanimeData(data)
            setLoading(false)
            
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
        // console.log(search)
    },[animeData])
    if(loading){
        return <Loading/>
    }
    else{
        
        return(
            <>
            <Header />
            <div className="both">
            <h1 className='mainTitle'>{search?.length <= 0 || search?.length == undefined ? "Recent Release" :`Search Result for ${search}`}</h1> 
            <input type="text" value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)} className={'search'}  />
            </div> 
           
            
            <div className="all">
                {animeData?.map(anime=>{
    
                    if(anime.length < 0){
                        return(
                        <h1>No result found</h1>
                        )
                    }
                    else{
                        return(
                       
                        <Link className="animeCard" key={anime.animeId} to={`card/${anime.animeId}`} value={anime.animeTitle} onClick={()=>setSwi(anime.animeId)} >
                        <img key={anime.animeId} src={anime.animeImg} alt="image" className='titleImg' />
                            <h4 className="animeTitle">
                                {anime.animeTitle}
                                {/* {<Detail prop={swi} className='det' />} */}
                            </h4>                
    </Link>
    
                    )
                    }
                    
                })}
                </div>
            </>
        )
    }
   
    
}

export default Body
