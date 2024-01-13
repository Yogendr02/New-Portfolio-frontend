import React from 'react'
function contactcompo({link,composite,linktag}) {
  return (
    <div className='flex space-x-2 items-center'>
      {composite}
      <a href={link}>{linktag}</a>
    </div>
  )
}

export default contactcompo
