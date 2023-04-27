import "./EventPage.css";
import Button from "../../components/Button/Button";
import EventImg from "../../assets/EventInfo.png";
import { motion } from 'framer-motion'
function EventInfoPage() {
  return (
    <>
      <div className="event-info" id='info'>
        <div className="event-info__content">
          <motion.div 
            className="event-info-left"
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4,ease: "easeInOut", duration: 1.4}}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1>What is ProductForge?</h1>
            <div className="event-content">
              <p>
                Unlock your potential with ProductForge. Learn to develop products
                from idea to marketing, hone the skills necessary for success, and
                explore the technical domains that drive innovation. Have you ever
                wondered how?
              </p>
              <p className="two">
                ProductForge has the vision to answer these questions. An
                end-to-end Workshop X Hackathon where exciting opportunities await
                you to learn and gain connections from Industries.
              </p>
            </div>
            <Button>Learn more</Button>
          </motion.div>
          <motion.div 
            className="event-info-right"
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4,ease: "easeInOut", duration: 1.4}}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <img src={EventImg} className alt="event-img" />
          </motion.div>
        </div>

      </div>
    </>
  );
}

export default EventInfoPage;
