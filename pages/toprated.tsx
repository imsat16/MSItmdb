import React from 'react'
import MSILayouts from '../Layouts'
import { useRouter } from 'next/router'
import MSISection from '../components/section'

const TopRated = () => {
  const router = useRouter()

  return (
    <MSILayouts>
      <p className='cursor-pointer' onClick={()=>router.back()}>Back</p>
        <MSISection category='top' link='/' title='Top Rated'/>
    </MSILayouts>
  )
}

export default TopRated