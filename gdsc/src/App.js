import DomainSplitPage from "./Pages/DomainSplit/DomainSplitPage";
import Navbar from "./components/Navbar/Navbar";
import HeroPage from "./Pages/Hero/HeroPage";
import EventInfoPage from "./Pages/EventInfo/EventInfoPage";
import MarketingPage from "./Pages/Marketing/marketingPage";
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
    </>
  );
}

export default App;
