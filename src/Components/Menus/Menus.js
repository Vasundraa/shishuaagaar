import React from 'react'
import './Menus.css'
import menu_1 from '../../assets/program-1.jpg'
import menu_2 from '../../assets/program-2.jpg'

import { Link } from 'react-router-dom'

const Menus = () => {
  return (
    <div className='menus'>
        <div className="menu">
            <Link to = "/Breastfeedingbasics">
            <img src={menu_1} alt=""/>
            <div className="caption">
                
                <h2>தாய்ப்பால் ஊட்டுதல்</h2>

            </div>
            </Link>
        </div>
        <div className="menu">
            <Link to="/Aboutme">
            <img src={menu_2} alt=""/>
            <div className="caption">
               
            <h2>தாய்பால் ஊட்டுதல்</h2>
            </div>
            </Link>
        </div>

        </div>


  )
}

export default Menus