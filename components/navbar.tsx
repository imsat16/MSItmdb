import Link from 'next/link'
import React from 'react'

const MsiNav = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <p className='text-black font-semibold'><Link href={'/'}>Milennia Movie</Link></p>
        <div className="flex items-center gap-4">
          <Link href={'/register'}>
            <div className="hover:text-black cursor-pointer">Register</div>
          </Link>
          <Link href={'/login'}>
            <div className="bg-blue-500 cursor-pointer p-2 px-3 rounded-lg text-white font-semibold">Login</div>
          </Link>
        </div>
    </div>
  )
}

export default MsiNav