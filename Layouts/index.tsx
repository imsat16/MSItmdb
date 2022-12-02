import React, { ReactNode } from 'react'
import MsiNav from '../components/navbar'

type Lyt = {
    children : ReactNode | ReactNode[]
}
const MSILayouts = (ly:Lyt) => {
  return (
    <main className='flex flex-col gap-8'>
        <MsiNav/>
        <div className="flex gap-8 flex-col p-5">
          {ly.children}
        </div>
    </main>
  )
}

export default MSILayouts