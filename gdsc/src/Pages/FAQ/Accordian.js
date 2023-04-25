import React, { useState } from 'react'
import "./faq.css"
import { AiOutlineDown } from 'react-icons/ai'

function Accordian({ title, content}) {
  const [active, setActive] = useState(false)
  return (
    <div className="accordian">
        <div className="accordianHeading" onClick={()=>{setActive(!active)}}>
            <p>{title}</p>
            <AiOutlineDown className={active?"upSideDown downArrow":"downArrow"}/>
        </div>

        <div className={active? "showAccordian accordianContent": "accordianContent"}>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Accordian