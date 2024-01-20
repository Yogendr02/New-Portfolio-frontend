import React from 'react'

function project({link,heading,desc}) {
  return (
    <a href='' className='flex w-2/3 h-auto rounded-sm drop-shadow-lg bg-[#7ED7C1] m-auto my-2'>
      <video className='basis-1/2 w-56 h-92 p-2' controls autoplay>
        <source src={link} type="video/mp4" className='w-56'/>
        Your browser does not support the video tag.
      </video>

      <div className='basis-1/2 grid col-span-1 py-2'>
        <h1 className='font-bold text-lg underline'>{heading}</h1>
        <div>{desc}</div>
      </div>
    </a>
  )
}

export default project
