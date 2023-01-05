import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { firestore } from "./firebase/firebase";
import getCities from "./handlers/fireHandler";
import { useRef } from "react";

function App() {
  const dataRef: any = useRef();

  const submithandler = (e: any) => {
    e.preventDefault();
    console.log(firestore);
    getCities(firestore);
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

      <Footer />
    </div>
  );
}

export default App;
