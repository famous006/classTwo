import React from 'react'
import myImg from "../src/assets/atomic.png"

const Navbar = () => {
  return (
    <nav style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
        <img src={myImg} alt='' width={"80px"}/>
        <ul style={{listStyle: "none"}}>
            <li style={{display:'inline-block', marginLeft: "140px"}}>Home</li>
            <li style={{display:'inline-block', marginLeft: "140px"}}>Contact</li>
            <li style={{display:'inline-block', marginLeft: "140px"}}>About Us</li>
        </ul>

    </nav>
  )
}

export default Navbar