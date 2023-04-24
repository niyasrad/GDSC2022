import DomainSplitPage from "./Pages/DomainSplit/DomainSplitPage";
import Navbar from "./components/Navbar/Navbar";
import HeroPage from "./Pages/Hero/HeroPage";
import MarketingPage from "./Pages/Marketing/marketingPage";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <DomainSplitPage />
      <MarketingPage />
    </>
  );
}

export default App;
