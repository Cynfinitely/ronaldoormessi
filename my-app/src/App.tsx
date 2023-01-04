import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import handleSubmit from "./handles/handlesubmit";
import { useRef } from "react";

function App() {
  const dataRef: any = useRef();

  const submithandler = (e: any) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <div className="container flex flex-col">
      <Header />
      <Main />
      <form onSubmit={submithandler}>
        <input
          type="text"
          ref={dataRef}
        />
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
