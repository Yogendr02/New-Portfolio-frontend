import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch,useSelector } from 'react-redux';
import { changemenu,changeborder, changebborder } from '../store';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom'
function menu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onclick = ()=>{
        dispatch(changemenu());
    }
    const liborder = useSelector((state)=>{
      return state.currentmenu.lborder;
    })
    const biborder = useSelector((state)=>{
      return state.currentmenu.bborder;
    })
    const clicked = (setvar)=>{
      dispatch(changeborder(setvar));
      if(setvar=="Certificates") navigate("/new")
      if(setvar=="Home") navigate("/")
    }
    const mouseenter = (setvar)=>{
      dispatch(changebborder(setvar));
    }
    const mouseleave = ()=>{
      dispatch(changebborder(""))
    }
  return (
    <div className='w-1/4 h-screen z-10 bg-black right-0 absolute text-white rounded-l-full grid p-5 space-y-2'>
      <CancelOutlinedIcon className='inset-y-2 right-2 cursor-pointer absolute' onClick={onclick} fontSize="large"/>
      
      <div onClick={()=>{clicked("Home")}} onMouseEnter={()=>{mouseenter("Home")}} onMouseLeave={mouseleave} className={classNames('text-white text-2xl place-self-center cursor-pointer',{"border-l-2":liborder=="Home","underline":biborder=="Home"})}>Home</div>
      <a onClick={()=>{clicked("Resume Download")}} href='https://new-portfolio-p5y6.onrender.com/resume.pdf' target="_blank" onMouseEnter={()=>{mouseenter("Resume Download")}} onMouseLeave={mouseleave} className={classNames('text-white text-2xl place-self-center cursor-pointer',{"border-l-2":liborder=="Resume Download","underline":biborder=="Resume Download"})}>Resume Download</a>
      <div onClick={()=>{clicked("Certificates")}} onMouseEnter={()=>{mouseenter("Certificates")}} onMouseLeave={mouseleave} className={classNames('text-white text-2xl place-self-center cursor-pointer',{"border-l-2":liborder=="Certificates","underline":biborder=="Certificates"})}>Certificates</div>
      <div onClick={()=>{clicked("Admin Login")}} onMouseEnter={()=>{mouseenter("Login")}} onMouseLeave={mouseleave} className={classNames('text-white text-2xl place-self-center cursor-pointer',{"border-l-2":liborder=="Login","underline":biborder=="Login"})}>Login</div>
      
    </div>
  )
}

export default menu
