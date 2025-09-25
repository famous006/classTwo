import React from 'react'
import myImg from "../src/assets/atomic.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display:"flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "lightgrey", padding: "10px 50px"}}>
        <img src={myImg} alt='' width={"80px"}/>
        <ul style={{listStyle: "none"}}>
            <li style={{display:'inline-block', marginLeft: "140px"}}><Link to='/'>Home</Link></li>
            <li style={{display:'inline-block', marginLeft: "140px"}}><Link to='/contact'>Contact</Link></li>
            <li style={{display:'inline-block', marginLeft: "140px"}}><Link to='/my-about'>About Us</Link></li>
            <li style={{display:'inline-block', marginLeft: "140px"}}><Link to='/services'>Services</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar