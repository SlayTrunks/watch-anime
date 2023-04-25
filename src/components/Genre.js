import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Loading from './Loading'
// import Header from './Header'
// import Header from './Header'
// import Genre from './Genre'

const Body = () => {
    const [loading,setloading] = useState(true)
    const genre = [ 'action',
'adventure',
'cars' ,
'comedy',
'crime',
'dementia',
'demons',

'horror',
'mystery',
'parody',
'police',
'psychological',
'romance',
'samurai',
'school',
'sci-fi',
'seinen',
'shoujo',
'shoujo-ai',
'shounen',
'shounen-ai',
'slice-of-Life',
'space',
'sports',
'super-power',
'supernatural',
'suspense',
'thriller',
'vampire',
'yaoi',
'yuri',]
    const [animeData,setanimeData] = useState()
    const [func,setFunc] = useState('action')
    
  
    
    const url = `https://gogoanime.consumet.stream/genre/${func}`

    async function fetchData(){
        try {
            const response = await fetch(url)
            const data = await response.json()
            setanimeData(data)
            setloading(false)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
        
    },[animeData])

   if(loading){
    return <Loading/>
   }
   else{

       return(
           <div className='don'>
           <Header />
           <h1 className='mainTitle'>{func} Genre</h1>
           {genre.map((list,i)=>{
              return (
               <>
              
              <button className="btn" onClick={()=>setFunc(list)} name={list} key={i}>{list}</button>
              </>
              )
           })}
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
           </div>
       )
   }
    
}

export default Body
