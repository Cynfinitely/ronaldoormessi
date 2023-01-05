import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import db from "./firebase/firebase";
import getCities from "./handlers/fireHandler";
import incrementMessi from "./handlers/incrementHandler";
import { useRef } from "react";

function App() {
  const dataRef: any = useRef();

  const submithandler = (e: any) => {
    e.preventDefault();
    console.log(db);
    getCities(db);
  };
  const incrementhandler = (e: any) => {
    e.preventDefault();
    incrementMessi();
  };
  return (
    <div className="container flex flex-col">
      <Header />
      <Main />
      <button
        type="submit"
        onClick={submithandler}>
        TEST
      </button>
      <button
        type="submit"
        onClick={incrementhandler}>
        ADD
      </button>

      <Footer />
    </div>
  );
}

export default App;
