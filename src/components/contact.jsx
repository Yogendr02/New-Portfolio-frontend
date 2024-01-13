import React from 'react'
import Conta from './contactcompo'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
function contact() {
  return (
    <div className='w-full h-44 flex text-center p-2 justify-between pt-2 items-center text-white bg-[#092635]'>
      <Conta link={'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=yogendrakesharwani02@gmail.com'} linktag={"yogendrakesharwani02@gmail.com"} composite={<EmailOutlinedIcon className="rounded-full" fontSize="large"/>}/>
      <Conta link={'https://www.linkedin.com/in/yogendra-kesarwani/'} linktag={"LinkedIn"} composite={<LinkedInIcon className="rounded-full" fontSize="large"/>}/>
      <div className='flex space-x-2 items-center'>
        <PhoneInTalkOutlinedIcon fontSize="large" />
        <div>9580803125</div>
      </div>
      <div className='flex space-x-2 items-center'>
        <HomeOutlinedIcon fontSize="large" />
        <div>104/147-A Sisamau,P.road,Kanpur,U.P.</div>
      </div>
    </div>
  )
}

export default contact
