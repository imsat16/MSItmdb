import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MSICard from './card'
import axios from 'axios'
import { BASE_API_URL, IMG_URL } from '../constant'
import { useRouter } from 'next/router'
type Sec ={
    title: string
    link: string
    seeall?: string
    slice?: boolean
    category?:'now'|'upcoming'|'popular'|'top'
}
const MSISection = (sec:Sec) => {
  const [nP, setNP]:any = useState([])
  const [uC, setUC]:any = useState([])
  const [pop, setPop]:any = useState([])
  const [tr, setTR]:any = useState([])
  useEffect(() => {
    fetchNowPlaying()
    fetchUpcoming()
    fetchPopular()
    fetchTopRated()
  }, [])

  function fetchNowPlaying(){
      axios.get('https://api.themoviedb.org/3/movie/now_playing',{
          headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE"
          }
      }).then((res:any)=>{
          // console.log(res.data)
          setNP(res.data.results)
      })
  }
  function fetchUpcoming(){
      axios.get('https://api.themoviedb.org/3/movie/upcoming',{
          headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE"
          }
      }).then((res:any)=>{
          // console.log(res.data)
          setUC(res.data.results)
      })
  }
  function fetchPopular(){
      axios.get('https://api.themoviedb.org/3/movie/popular',{
          headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE"
          }
      }).then((res:any)=>{
          // console.log(res.data)
          setPop(res.data.results)
      })
  }
  function fetchTopRated(){
      axios.get('https://api.themoviedb.org/3/movie/top_rated',{
          headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE"
          }
      }).then((res:any)=>{
          // console.log(res.data)
          setTR(res.data.results)
      })
  }
  function fetchSimilar(){
      axios.get('https://api.themoviedb.org/3/movie/top_rated',{
          headers:{
              "Content-Type": "application/json",
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE"
          }
      }).then((res:any)=>{
          // console.log(res.data)
          setTR(res.data.results)
      })
  }

  return (
    <div className="flex flex-col gap-4 px-3">
        <div className="flex flex-wrap justify-between">
            <p className='font-semibold'>{sec.title}</p>
            {
            sec.seeall
            ?<Link href={`${sec.seeall}`}>
              <p>see all</p>
            </Link>
            :''
            }
        </div>
        <div className='grid grid-cols-3 md:flex flex-wrap gap-5 '>
          { sec.slice?
            (
                sec.category=='now'
                ?nP
                :
                sec.category=='upcoming'
                ?uC
                :
                sec.category=='popular'
                ?pop
                :
                sec.category=='top'
                ?tr
                :''
            )
                .slice(0,7).map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate={x.vote_average}/>
            )):
            (sec.category=='now'?nP:
                sec.category=='upcoming'
                ?uC
                :
                sec.category=='popular'
                ?pop
                :
                sec.category=='top'
                ?tr
                :'').map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate={x.vote_average}/>
            ))
          }
          {/* { sec.nowPlaying && sec.slice?
            uC.slice(0,7).map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate='5.0'/>
            )):
            uC.map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate='5.0'/>
            ))
          } */}
          {/* { sec.nowPlaying && sec.slice?
            nP.slice(0,7).map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate='5.0'/>
            )):
            nP.map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate='5.0'/>
            ))
          }
          { sec.nowPlaying && sec.slice?
            nP.slice(0,7).map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate='5.0'/>
            )):
            nP.map((x:any)=>(
                <MSICard key={x} date={x.release_date} title={x.original_title} img={IMG_URL + x.poster_path} link={'/details/'+x.id} rate='5.0'/>
            ))
          } */}
        </div>
    </div>
  )
}

export default MSISection