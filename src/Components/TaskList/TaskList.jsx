import React from 'react'

const TaskList = () => {
    return (
        <div id= "tasklist" className=' overflow-x-auto  h-[400px]  w-full mt-10 flex items-center justify-start gap-8 px-8 py-8 flex-nowrap '>
            <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-6 ' >
                <div className='flex items-center justify-between ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded-xl font-semibold text-sm ' >High</h3>
                    <h4 className='text-sm'>24 Oct 2024</h4>
                </div>
                <h2 className='text-xl font-semibold mt-5 '>Make A Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit consequatur voluptate placeat quo suscipit consectetur.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-6 ' >
                <div className='flex items-center justify-between ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded-xl font-semibold text-sm ' >High</h3>
                    <h4 className='text-sm'>24 Oct 2024</h4>
                </div>
                <h2 className='text-xl font-semibold mt-5 '>Make A Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit consequatur voluptate placeat quo suscipit consectetur.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-6 ' >
                <div className='flex items-center justify-between ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded-xl font-semibold text-sm ' >High</h3>
                    <h4 className='text-sm'>24 Oct 2024</h4>
                </div>
                <h2 className='text-xl font-semibold mt-5 '>Make A Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit consequatur voluptate placeat quo suscipit consectetur.</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-6 ' >
                <div className='flex items-center justify-between ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded-xl font-semibold text-sm ' >High</h3>
                    <h4 className='text-sm'>24 Oct 2024</h4>
                </div>
                <h2 className='text-xl font-semibold mt-5 '>Make A Youtube Video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit consequatur voluptate placeat quo suscipit consectetur.</p>
            </div>
            
           
        </div>
    )
}

export default TaskList