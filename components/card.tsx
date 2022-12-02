import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Crd = {
    link?: string
    rate: string
    key?: string
    img: string
    title: string
    date: string
    className?:string
    onClick?:any
    imgSize?:string
}
const MSICard = (crd:Crd) => {
  return (
    crd.link 
    ?
    <Link className='flex flex-col hover:scale-125 hover:shadow-lg hover:p-2 hover:rounded-lg hover:bg-blue-700/10 transition duration-300 ease-in-out gap-4 font-semibold min-h-[70px] md:min-h-[200px] md:min-w-[165px] md:max-w-[165px]' key={crd.key} href={`${crd.link}`}>
        {/* <div className="min-h-[70px] md:min-h-[220px]  md:min-w-[165px]  relative"> */}
        <div className={`${crd.imgSize ? crd.imgSize : ''} object-cover aspect-w-3 aspect-h-4 relative`}>
            <Image fill alt='' src={crd.img} className='rounded-md'/>
            <div className="">
                <p className='absolute bottom-0 left-1 translate-y-3 rounded-full border-2 border-yellow-400 bg-blue-700/25 hover:bg-white/75 hover:text-blue-700 text-white w-10 h-10 flex justify-center items-center font-semibold'>{crd.rate}</p>
            </div>
        </div>
        <div className="text-sm">
            <p>{crd.title}</p>
            <p>{new Date(crd.date).getFullYear()}</p>
        </div>
    </Link>
    :
    <div key={crd.key} onClick={crd.onClick} className={`${crd.className} flex flex-col gap-4 font-semibold`}>
        <div className="aspect-w-3 aspect-h-4  relative">
            <Image fill alt='' src={crd.img} className='rounded-md'/>
            <p className='absolute bottom-0 left-1 translate-y-3 rounded-full border-2 border-yellow-400 bg-blue-700/25 text-white w-10 h-10 flex justify-center items-center font-semibold'>{crd.rate}</p>
        </div>
    </div>
  )
}

export default MSICard