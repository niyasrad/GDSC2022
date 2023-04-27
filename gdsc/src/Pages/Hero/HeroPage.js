import "./HeroPage.css";
import note from "../../assets/note.png";
import hourglass from "../../assets/hourglass.png";
import scissors from "../../assets/scissors.png";
import arrow from "../../assets/Arrow.png";
import post from "../../assets/post.png";
import { motion } from 'framer-motion'
function HeroPage() {
  return (
    <div className="hero" id="hero">
      <div className="hero_welcome">
        <img src={scissors} alt="scissor" className="image" />
        <p>Welcome to</p>
        <img src={hourglass} alt="hourglass" className="image"/>
      </div>
      <motion.div 
        className="hero_title"
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.4,ease: "easeInOut", duration: 2}}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 >
            Product<span>Forge</span>
          </h1>
          <p>
            Build, Learn, Network and Discover the Secrets of Product
            Development and Marketing with ProductForge
          </p>
        </div>
      </motion.div>
      <div className="hero_end">
        <img src={note} alt="note" className="image" />
        <a href="#info"><img src={arrow} alt="arrow" className="arrow"/></a>
        <img src={post} alt="post" className="image" />
      </div>
    </div>
  );
}

export default HeroPage;
