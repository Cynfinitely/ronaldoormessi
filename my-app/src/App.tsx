import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import db from "./firebase/firebase";
import getCities from "./handlers/fireHandler";
import incrementMessi from "./handlers/messiIncrementHandler";
import incrementRonaldo from "./handlers/ronaldoIncrementHandler";
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
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
        onClick={incrementhandler}>
        Messi
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
        onClick={incrementRonaldo}>
        Ronaldo
      </button>

      <Footer />
    </div>
  );
}

export default App;
