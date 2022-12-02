import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_API_URL, API_KEY } from '../../constant'

// const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=51968c8ab3f2d86138b267bff566d524'
const Movie = () => {
    useEffect(() => {
      fetchData()
    //   console.log('asam')
    }, [])
    
    function fetchData(){
        axios.get('https://api.themoviedb.org/3/movie/popular',{
            headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE"
            }
        }).then((res:any)=>{
            console.log(res.data)
            console.log('hadeh')
        })
    }
    return (
    <div>
        jjjjjj
    </div>
  )
}

export default Movie