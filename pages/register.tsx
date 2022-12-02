import React from 'react'
import MSILayouts from '../Layouts'

const Register = () => {
  return (
    <MSILayouts>
      <div className="min-h-screen flex justify-center items-center">
        <div className='shadow-xl w-1/4 flex flex-col gap-4 rounded-lg p-4 bg-blue-300'>
          <h2 className='text-3xl text-white font-bold'>Register</h2>
          <form className="flex flex-col gap-4">
              <div className='flex flex-col'>
              <label className='text-sm text-white font-semibold' htmlFor="">Name</label>
              <input className='p-2 rounded-lg' type="text" />
              </div>
              <div className='flex flex-col'>
              <label className='text-sm text-white font-semibold' htmlFor="">Username</label>
              <input className='p-2 rounded-lg' type="text" />
              </div>
              <div className='flex flex-col'>
              <label className='text-sm text-white font-semibold' htmlFor="">Password</label>
              <input className='p-2 rounded-lg' type="password" />
              </div>
              <div className='flex flex-col'>
              <label className='text-sm text-white font-semibold' htmlFor="">Confirm Password</label>
              <input className='p-2 rounded-lg' type="password" />
              </div>
              <button className='bg-blue-500 text-white p-2 rounded-lg font-semibold'>Submit</button>
          </form>
        </div>
      </div>
    </MSILayouts>
  )
}

export default Register