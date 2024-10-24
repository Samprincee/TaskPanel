import React from 'react'

const TaskNumberList = () => {
  return (
    <div className='mt-10 p-10 flex items-center justify-between gap-5'>
        
        <div className='bg-red-400 w-1/4 rounded-xl px-9 py-8 text-start '>
        <h1 className='text-5xl font-bold'>0</h1>
        <h2 className='text-2xl font-semibold'>New Task</h2>
        </div>
        <div className='bg-green-400 w-1/4 rounded-xl px-9 py-8 text-start '>
        <h1 className='text-5xl font-bold'>0</h1>
        <h2 className='text-2xl font-semibold'>New Task</h2>
        </div>
        <div className='bg-yellow-400 w-1/4 rounded-xl px-9 py-8 text-start '>
        <h1 className='text-5xl font-bold'>0</h1>
        <h2 className='text-2xl font-semibold'>New Task</h2>
        </div>
        <div className='bg-blue-400 w-1/4 rounded-xl px-9 py-8 text-start '>
        <h1 className='text-5xl font-bold'>0</h1>
        <h2 className='text-2xl font-semibold'>New Task</h2>
        </div>
        
    </div>
  )
}

export default TaskNumberList