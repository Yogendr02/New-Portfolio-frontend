import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { changemenu } from '../store';
function navbar() {
  const dispatch = useDispatch();
  
  const onclick = ()=>{
    dispatch(changemenu());
    console.log(nowchange)
  }
  return (
    <div className='flex h-fit w-screen border-b-2 border-[#5C8374]'>
        <div className='border-x-2 border-[#0766AD] mx-2 w-fit '>
          <div className='font-bold text-green-700 align-top m-2 text-4xl'>Portfolio</div>
        </div>
        <FiAlignJustify className='h-12 w-12 bg-[#C5E898] p-2 rounded-full my-1 absolute right-5 cursor-pointer' onClick={onclick} />
      </div>
  )
}

export default navbar
