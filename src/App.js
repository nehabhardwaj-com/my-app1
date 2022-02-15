// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar title="TextUtil"/>
    <div className="container">
    <TextForm heading="Enter Text to Analyse"/>
    </div>
   </>
  );
}

export default App;
