import React from 'react'
import MSILayouts from '../Layouts'
import { useRouter } from 'next/router'
import MSISection from '../components/section'

const Popular = () => {
  const router = useRouter()

  return (
    <MSILayouts>
      <p className='cursor-pointer' onClick={()=>router.back()}>Back</p>
      <MSISection category='popular' link='/' title='Upcoming'/>

    </MSILayouts>
  )
}

export default Popular