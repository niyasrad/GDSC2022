import React from 'react'
import Accordian from './Accordian'
import "./faq.css"
import cup from '../../assets/cup.png'
import medal from '../../assets/medal.png'

function Faq() {
  return (
    <div className="FAQ">
      <h2 className='FAQ-heading'><center>Need Help?</center></h2>
      <div className="main-container">
        <div>
            <img src={cup} alt="google cup" />
        </div>
        <div className="Accordian">
          <Accordian title={"What is Product Forge?"} content={"ProductForge is an end-to-end life cycle wherein shortlisted participants will learn how to transform an idea to a scalable product through a series of segmented Workshops cum a collective Hackathon event. What is a collective hackathon? Join us and find out! :)"}/>
          <Accordian title={"When and where is ProductForge taking place?"} content={"ProductForge will be a two-day event, taking place at the Placement Cell Hall of Sri Venkateswara College Of Engineering from the morning of 6th May 2023 to the morning of 7th May 2023."}/>
          <Accordian title={"What topics will be covered at ProductForge?"} content={"The fundamental idea of ProductForge is to view products through a lens of Artificial Intelligence. We utilize the technological domains of Web Development, Cloud Computing, UI/UX and Marketing to make them useable, scalable, and sellable."}/>
          <Accordian title={"How much does it cost to attend ProductForge?"} content={"To participate in the event, students will get shortlisted through merit and the event will cost Rs X, Food and Snacks will be provided to the participants on a regular to the participants."}/>
          <Accordian title={"Who can attend ProductForge?"} content={"We are in search of passionate, hard working talent groups who want to learn and practically implement their ideas to real life products. If you feel this is a good fit for you, check out our registration panel."}/>
        </div>
        <div>
            <img src={medal} alt="google medal"/>
        </div>
      </div>
    </div>
  )
}

export default Faq