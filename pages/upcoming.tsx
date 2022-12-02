import React from 'react'
import MSILayouts from '../Layouts'
import { useRouter } from 'next/router'
import MSISection from '../components/section'

const Upcoming = () => {
  const router = useRouter()

  return (
    <MSILayouts>
        <p className='cursor-pointer' onClick={()=>router.back()}>Back</p>
        <MSISection category='upcoming' link='/' title='Upcoming'/>
    </MSILayouts>
  )
}

export default Upcoming