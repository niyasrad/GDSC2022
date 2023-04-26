import DomainSplitPage from "./Pages/DomainSplit/DomainSplitPage";
import Navbar from "./components/Navbar/Navbar";
import HeroPage from "./Pages/Hero/HeroPage";
import EventInfoPage from "./Pages/EventInfo/EventInfoPage";
import MarketingPage from "./Pages/Marketing/marketingPage";
import Faq from "./Pages/FAQ/Faq";
import Footer from "./Pages/Footer/Footer";
import RegisterPage from "./Pages/Register/RegisterPage";
function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <EventInfoPage />
      <DomainSplitPage />
      <MarketingPage />
      <RegisterPage />
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
