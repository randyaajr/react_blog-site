import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/homepage/Home";
import Singlepost from "./components/pages/singlepost/Singlepost";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Singlepost />
      </div>
    </>
  );
}

export default App;
