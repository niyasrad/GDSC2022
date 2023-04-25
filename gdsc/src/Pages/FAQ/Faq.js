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
          <Accordian title={"What is Product Forge?"} content={"Anyone who is interested in developing their skills in product development and technology is welcome to attend. This includes students, professionals, and anyone with an interest in the field."}/>
          <Accordian title={"When and where is ProductForge taking place?"} content={"Anyone who is interested in developing their skills in product development and technology is welcome to attend. This includes students, professionals, and anyone with an interest in the field."}/>
          <Accordian title={"What topics will be covered at ProductForge?"} content={"Anyone who is interested in developing their skills in product development and technology is welcome to attend. This includes students, professionals, and anyone with an interest in the field."}/>
          <Accordian title={"How much does it cost to attend ProductForge?"} content={"Anyone who is interested in developing their skills in product development and technology is welcome to attend. This includes students, professionals, and anyone with an interest in the field."}/>
          <Accordian title={"Who can attend ProductForge?"} content={"Anyone who is interested in developing their skills in product development and technology is welcome to attend. This includes students, professionals, and anyone with an interest in the field."}/>
        </div>
        <div>
            <img src={medal} alt="google medal"/>
        </div>
      </div>
      <div className="empty-container"></div>
    </div>
  )
}

export default Faq