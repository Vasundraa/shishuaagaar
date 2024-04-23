import React from 'react'
import {Link} from "react-router-dom";
import './profile.css'


const Profile = () => {
  return (
    <div className='bg'>
    <div className='over' >
       <h1 className='heading'>கண்காணிப்பு</h1> 
      
      <Link to='/Sizeandweight'>
        <div className='button'>
            <button className='text'> குழந்தையின் சுயவிவரம் 👼</button>
        </div>
      </Link>
      <Link to='/Feed'>
        <div className='button'>
            <button className='text'>பாலூட்டல் கண்காணிப்பு 👨‍🍼</button>
        </div>
      </Link>
      <Link to='/Poop'>
        <div className='button'>
            <button className='text'>டயப்பர் மாற்றுதல் 💩</button>
        </div>
      </Link>
      
      
    </div>
    </div>
    
  )
}

export default Profile 
