import React from 'react'
function logos({className,lnk}) {
  return (
    <img className={`${className} rounded-full`} src={lnk} alt="" />
  )
}

export default logos
