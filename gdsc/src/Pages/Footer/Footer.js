import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg";
import { GoLocation } from 'react-icons/go'
import { AiFillInstagram } from 'react-icons/ai';
import { BsDiscord, BsTwitter } from "react-icons/bs"

function Footer() {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h4 className="title">
                    Google Developer Student Clubs <span>SVCE</span>
                    </h4>
                </div>
                <div className="address">
                    <GoLocation size={24} color='#595959'/>
                    <p>Sriperumbudur, TamilNadu, IN</p>
                </div>
                <div className="icons">
                    <AiFillInstagram size={28} color='#595959' style={{cursor:"pointer"}}/>
                    <BsTwitter size={24} color='#595959' style={{cursor:"pointer"}}/>
                    <BsDiscord size={24} color='#595959' onClick={()=>{window.open("https://discord.gg/2eGAyK7YkY","blank")}} style={{cursor:"pointer"}}/>
                </div>
            </div>
            <div className="contact-us">
                <div className="footer-navigation">
                    <h3>GDSC</h3>
                    <a href="#info">About</a>
                    <a href="#schedule">Schedule</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>Aryan</p>
                    <p>+91 9940647447</p>
                    <p>Niyas</p>
                    <p>+91 8148100828</p>
                </div>
            </div>
        </div>
        <div className="copyrights">
            <center><p>© 2023 GDSC SVCE | all rights reserved</p></center>
        </div>
    </div>
  )
}

export default Footer