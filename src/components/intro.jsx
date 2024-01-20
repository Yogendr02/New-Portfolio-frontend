import React from 'react'

function intro() {
    return (
        <div className='flex w-1/2 h-44 mx-auto my-3'>
            <img className='border-4 border-[#B5C99A] rounded-full basis-1/3 h-56 z-10' src="https://new-portfolio-p5y6.onrender.com/myimage.jpg" alt="" />
            <div className='bg-yellow-300 text-black flex basis-2/3 h-full -mx-12 my-6 rounded-r-xl text-align'>
                <div className='basis-1/5'>

                </div>
                <div className='basis-4/5 py-2 pr-4'>
                <h1 className='font-bold text-4xl text-slate-800'>Hello!  I am</h1>
                <br />
                <div >
                    <b>Yogendra kesharwani</b> currently doing my B.Tech UG course from <a href='https://www.nitandhra.ac.in/main/' className='text-blue-800 underline'>National Institute Of Technology Andhra Pradesh</a>.I am passionate to become a successful <b className='font-semibold'>MERN stack developer</b>.
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default intro
