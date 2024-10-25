import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1c1c1c] rounded-xl  p-5 mt-5 m-10 flex items-start justify-between'>

            <div className='w-3/5 px-3 py-3' >
                <div className='mb-5'>
                    <h3 className='text-gray-300 text-lg font-semibold px-2 mb-1'>Task Title</h3>
                    <input type="text" placeholder='Ex: Make A UI Design' 
                    className='bg-transparent px-3 w-[500px] h-[40px] rounded-lg outline-none border-2 border-gray-600 ' />
                </div>
                <div className='mb-5'>
                    <h3 className='text-gray-300 text-lg font-semibold px-2 mb-1'>Date</h3>
                    <input type="date" 
                    className='bg-transparent px-3 w-[500px] h-[40px] rounded-lg outline-none border-2 border-gray-600 placeholder:text-gray-200 ' />
                </div>
                <div className='mb-5'>
                    <h3 className='text-gray-300 text-lg font-semibold px-2 mb-1'>Assign to</h3>
                    <input type="text" placeholder='Employee Name' 
                    className='bg-transparent px-3 w-[500px] h-[40px] rounded-lg outline-none border-2 border-gray-600 ' />
                </div>
                <div className='mb-5'>
                    <h3 className='text-gray-300 text-lg font-semibold px-2 mb-1'>Category</h3>
                    <input type="text" placeholder='Design, Dev, Etc..' 
                    className='bg-transparent px-3 w-[500px] h-[40px] rounded-lg outline-none border-2 border-gray-600 ' />
                </div>
                
                
            </div>

            <div className='w-2/5 flex flex-col items-start' > 
                    <h3 className='text-gray-300 text-lg font-semibold px-2 mb-2'>Description</h3>
                    <textarea className='w-[650px] h-[250px] bg-transparent rounded-lg outline-none border-2 border-gray-600 p-5  ' />
                    <button className='w-[650px] h-[55px] text-xl font-bold mt-3 bg-emerald-600 px-5 py-2 rounded-lg'>Submit</button>
            </div>

        </div>
  )
}

export default CreateTask