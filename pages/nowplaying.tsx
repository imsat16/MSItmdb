import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MSILayouts from '../Layouts'
import MSISection from '../components/section'

const NowPlaying = () => {
  const router = useRouter()

  return (
    <MSILayouts>
      <p className='cursor-pointer' onClick={()=>router.back()}>Back</p>
        <MSISection category='now' link='/' title='Upcoming'/>
    </MSILayouts>
  )
}

export default NowPlaying