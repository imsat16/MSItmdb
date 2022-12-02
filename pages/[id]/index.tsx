import { useRouter } from 'next/router'
import React from 'react'
import MSISection from '../../components/section'
import MSILayouts from '../../Layouts'

const SeeAll = () => {
  const router = useRouter()
  
  return (
    <MSILayouts>
      <p className='cursor-pointer' onClick={()=>router.back()}>Back</p>
      {}
      <MSISection link='' title='Now Playing'></MSISection>
    </MSILayouts>
  )
}

export default SeeAll