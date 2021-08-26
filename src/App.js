import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import Single from "./pages/single/Single";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Single />
      </div>
    </>
  );
}

export default App;
