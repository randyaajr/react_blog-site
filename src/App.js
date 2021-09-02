import "./App.scss";
import Navbar from "./components/navbar/Navbar";
//import Home from "./pages/homepage/Home";
import NewPost from "./pages/newPost/NewPost";
//import Single from "./pages/single/Single";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <NewPost />
      </div>
    </>
  );
}

export default App;
