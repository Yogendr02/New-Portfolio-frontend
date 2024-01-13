import React from 'react'

function pdfhead({lnk,name}) {
  return (<div className='grid space-y-2'>
    <h1 class="text-4xl my-2 w-fit h-fit rounded-2xl font-bold text-center m-auto p-2 border-red-600 text-purple-800 border-dotted border-2">{name}</h1>
    <embed src={`https://new-portfolio-p5y6.onrender.com/${lnk}#toolbar=0&navpanes=0&view=Fit`} className=' m-auto h-[600px] w-3/5' />
    <div className='w-screen h-1 bg-green-600'></div>
    </div>
  )
}

export default pdfhead
