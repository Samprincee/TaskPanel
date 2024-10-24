import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitChange = (e) => {
        e.preventDefault();
        console.log(`Email is ${email}`)
        console.log(`Password is ${password}`)
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center border-red-600  border-2'>
            <div className=' flex items-center justify-center w-[450px] h-[500px] border-emerald-600 border-2 rounded-2xl ' >

                <form onSubmit={(e) => submitChange(e)} className=' flex flex-col  items-center justify-center' >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required type="email" placeholder='Enter Your Email' className=' outline-none bg-transparent border-2
                     border-emerald-600 rounded-2xl px-8 py-3 mb-5 placeholder:text-gray-600 text-l font-semibold' />

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required type="password" placeholder='Enter Your Password' className=' outline-none bg-transparent border-2
                     border-emerald-600 rounded-2xl px-8 py-3 mb-5  placeholder:text-gray-600 text-l font-semibold' />

                    <button className='bg-emerald-600 border-2 border-emerald-600 rounded-2xl px-8 py-3'>Log in</button>
                </form>

            </div>
        </div>
    )
}

export default Login