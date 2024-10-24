import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-20 py-10 mt-10 '>
        <h1 className='text-2xl font-semibold'> Hello <br /> <span className='text-4xl font-bold'> Prince Kumar 👋</span></h1>
        <button className='bg-red-600 rounded-xl px-6 py-4 text-xl '>Log Out</button>
    </div>
  )
}

export default Header