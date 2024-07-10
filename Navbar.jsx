import "./Navbar.css";
import React from "react";
const navbar =()=>{
    return(
        <div className="Navbar">
            <div className="logo">
                <img src="https://images.squarespace-cdn.com/content/v1/62aabe83a3311d62dc0bd41d/eaa178a2-fc53-4742-b9f3-7557f1489e83/Little-Lemon_Branding-Cheat-Sheet_Submark_Blush2.gif"alt="Little Lemmon" width="180px"height="180px">
              </img>
              Little Lemmon
            </div>
            <navbar>
            <ul style={{listStyleType:"none"}}>
                <li spy={true} smooth={true} to="Home">Home</li>
               <li spy={true} smooth={true}to="About Us">About Us</li>
               <li spy={true} smooth={true}to="Reserve A Table">Reserve A Table</li>
               <li spy={true} smooth={true}to="Contact us">Contact Us</li>
            </ul>
            </navbar>
        </div>
    )
}
export default navbar;