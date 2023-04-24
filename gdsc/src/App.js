import logo from "./logo.svg";
import "./App.css";
import DomainSplitPage from "./components/domainSplit";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <DomainSplitPage />
    </div>
  );
}

export default App;
