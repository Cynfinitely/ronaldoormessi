import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import db from "./firebase/firebase";
import incrementMessi from "./handlers/messiIncrementHandler";
import incrementRonaldo from "./handlers/ronaldoIncrementHandler";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { ronaldoIncrement } from "./redux/slices/ronaldoCounterSlice";
import { messiIncrement } from "./redux/slices/messiCounterReducer";

function App() {
  const ronaldoCount = useSelector(
    (state: RootState) => state.ronaldoCounter.value
  );

  const dispatch = useDispatch();

  const submithandler = (e: any) => {
    e.preventDefault();
    console.log(db);
  };
  const incrementhandler = (e: any) => {
    e.preventDefault();
    incrementMessi();
  };
  return (
    <div className="container flex flex-col">
      <Header />
      <Main />
      <button type="submit">TEST</button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
        onClick={() => dispatch(messiIncrement())}>
        Messi
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
        onClick={() => dispatch(ronaldoIncrement())}>
        Ronaldo
      </button>

      <Footer />
    </div>
  );
}

export default App;
