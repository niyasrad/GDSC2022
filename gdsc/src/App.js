import DomainSplitPage from "./Pages/DomainSplit/DomainSplitPage";
import Navbar from "./components/Navbar/Navbar";
import HeroPage from "./Pages/Hero/HeroPage";
function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <EventInfoPage />
      <DomainSplitPage />
      <MarketingPage />
    </>
  );
}

export default App;
