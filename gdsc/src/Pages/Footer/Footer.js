import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg";
import { GoLocation } from 'react-icons/go'
import { AiFillInstagram } from 'react-icons/ai';
import { BsDiscord, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs"

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
                    <AiFillInstagram size={28} color='#595959' />
                    <BsFacebook size={24} color='#595959' />
                    <BsTwitter size={24} color='#595959' />
                    <BsWhatsapp size={24} color='#595959' />
                    <BsDiscord size={24} color='#595959' />
                </div>
            </div>
            <div className="contact-us">
                <div className="footer-navigation">
                    <h3>GDSC</h3>
                    <p>About</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                    <p>Help</p>
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