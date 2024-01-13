import React from 'react'
import Phead from "../components/pdf"
import Nav from "../components/navbar"
import Menu from "../components/menu"
import { useSelector,useDispatch } from 'react-redux'
function certificates() {
  const nowchange = useSelector((state) => {
    return state.currentmenu.openmenu
  })
  return (
    <div className='grid space-y-2'>
      {nowchange || <Menu/>}
      <Nav/>
      <Phead lnk={"react.pdf"} name={"React js"}/>
      <Phead lnk={"node.pdf"} name={"Node js"}/>
      <Phead lnk={"DSA.pdf"} name={"DSA in C++"}/>
    </div>
  )
}

export default certificates
