import "./marketingPage.css";
import hatImage from "../../assets/hatImage.png";
import marketingImage from "../../assets/marketing-image.svg";
import Boxes1 from "../../assets/Boxes1.svg";
import Boxes2 from "../../assets/Boxes2.svg";
import { motion } from 'framer-motion'
function MarketingPage() {
  return (
    <div className="marketing-body">
      <div className="marketing-body__boxes">
        <img src={Boxes2} alt="boxes" className="marketing-body__box domain-body__box--left"/>
        <img src={Boxes1} alt="boxes" className="marketing-body__box domain-body__box--right"/>
      </div>
      <motion.div 
        className="marketing-body__content" 
        initial={{ opacity: 0 }}
        transition={{ type: "spring", bounce: 0.4,ease: "easeInOut", duration: 2}}
        whileInView={{ opacity: 1 }}
      >
        <div className="marketing-header">Marketing and Pitching ⚡️</div>
        <div className="cap-icon">
          <img src={hatImage} alt="Hat" />
        </div>
        <div className="marketing-content">
          <img src={marketingImage} alt="Marketing"></img>
          <div className="marketing-description">
            At ProductForge, we understand that building a great product is only
            half the battle. That's why we also focus on teaching you how to
            market and pitch your product to potential customers and investors.
            Learn how to create compelling pitches, conduct market research, and
            develop effective marketing strategies. You'll get the chance to
            showcase your skills in front of a panel of experts and compete for
            prizes.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MarketingPage;
