import "./RegisterPage.css";
import Button from "../../components/Button/Button";
import RegisterIMG from "../../assets/register.png";
import { motion } from 'framer-motion'
function RegisterPage() {
  return (
    <div className="register" id="schedule">
      <div className="register__content"> 
        <motion.div 
          className="wrapper"
          initial={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0.4,ease: "easeInOut", duration: 2}}
          whileInView={{ opacity: 1 }}
        >
          <div className="register__header">
            <h1>Join Our Flagship Event 🔥</h1>
          </div>
          <div className="register__container">
            <div className="register__container__left">
              <p>
                Be part of something big and join us for our flagship event on{" "}
                <span className="date">May 6th and 7th, 2023.</span> This
                end-to-end workshop and hackathon will provide you with a unique
                opportunity to learn from industry experts and connect with
                like-minded individuals. The event is spread across two days and
                will cover all domains of technology, including web, cloud,
                machine learning, and UI. You'll have access to hands-on
                workshops, hackathons, and presentations that will take you
                through the complete development lifecycle of a product.
              </p>
              <div className="register__container__left__button">
                <Button>Register Now</Button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="register__container__right"
          initial={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0.4,ease: "easeInOut", duration: 2}}
          whileInView={{ opacity: 1 }}
        >
          <img src={RegisterIMG} alt="" />
        </motion.div>
      </div>
      
    </div>
  );
}

export default RegisterPage;
