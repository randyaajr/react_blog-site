import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import Singlepost from "./pages/single/Single";

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
