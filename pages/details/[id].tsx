import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MSICard from '../../components/card'
import MSISection from '../../components/section'
import MSILayouts from '../../Layouts'
import axios from 'axios'
import { IMG_URL } from '../../constant'
import Image from 'next/image'
type Det = {
    vid: string
}

const MSIDetails = (det: Det) => {
    const [id, setId] = useState<string | string[] | undefined>('');
    const [data,setData]:any = useState([])
    const [genres,setGenres] = useState([])
    const router = useRouter();

    useEffect(() => {
        if (id==='') return;
        fetchDetail()
        fetchVideo ()
    console.log(id)
    }, [id])

    function fetchVideo(){
        axios.get('https://api.themoviedb.org/3/movie/'+id+'/videos',{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE` 
            }
        }).then((res:any)=>{
            console.log(res.data)
        })
    }
    function fetchDetail(){
        axios.get('https://api.themoviedb.org/3/movie/'+id,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyE` 
            }
        }).then((res:any)=>{
            console.log(res.data)
            setGenres(res.data.genres)
            setData(res.data)
            console.log(timeConvert(res.data.runtime))
        })
    }

    useEffect(()=>{
        if(!router.isReady) return;
        setId(router.query.id);
        // const {idx} = router.query;
        // console.log(router.query.id)
    },[router.isReady])
    
    function timeConvert(num:number){
        var hours = Math.floor(num / 60);  
        var minutes = num % 60;
        return hours + 'h' + ":" + minutes + 'm';         
    }

    return (
    <MSILayouts>
        <div className="relative md:grid grid-cols-8 gap-5 p-5 py-28 min-h-screen">
        <Image className='-z-10 object-cover' priority fill src={`${IMG_URL + data.backdrop_path}`} alt={''}/>
        <MSICard key='' imgSize='aspect-none' className='col-span-2 ' date='' title='asdassad' link='' img={IMG_URL + data.poster_path} rate='5.0'/>
        <div className="col-span-6 p-4 rounded-lg text-white flex flex-col bg-black/30">
            <strong className='text-5xl'>{data.title}</strong>
            <p className='text-sm'>EN | 123 Min | 15 Dec 2021</p>
            <div className="flex items-center gap-2">
            {new Date(data.release_date).toLocaleDateString().replace(/\//g, '/').split('T')[0]} •
            {genres.map((g:any)=>(
                <p key={g.id}>{g.name}</p> 
            ))} • {""}
            {timeConvert(data.runtime)}
            </div>
            <p className='text-sm'>{data.overview}</p>
        </div>
    </div>
    {/* <div className="flex items-center justify-center bg-red-500">
        <video autoPlay muted className='max-h-[400px]'>
            <source src={data.iso_639_1} />
        </video>
    </div> */}
    <MSISection category='now' title='Similar Movies' link=''/>
    </MSILayouts>
  )
}

export default MSIDetails