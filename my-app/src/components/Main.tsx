import "../assets/css/Main.css";
import Ronaldo from "../assets/images/Ronaldo.jpg";
import Messi from "../assets/images/Messi.jpg";
import type { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMessiLikes,
  fetchRonaldoLikes,
  messiIncrement,
  ronaldoIncrement,
} from "../redux/slices/counterReducer";
import { useEffect } from "react";

const Main = () => {
  const ronaldoCount = useSelector(
    (state: RootState) => state.counter.ronaldoValue
  );
  const messiCount = useSelector(
    (state: RootState) => state.counter.messiValue
  );
  const status = useSelector((state: RootState) => state.counter.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMessiLikes());
      dispatch(fetchRonaldoLikes());
    }
  }, [status, dispatch]);

  return (
    <div className="h-full">
      <div className="compare flex flex-row justify-evenly h-full">
        <div className="py-2 m-2 flex items-center">
          <div className="flex flex-col items-center">
            <img
              src={Ronaldo}
              alt="Ronaldo"
            />
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => dispatch(ronaldoIncrement())}>
              Support Ronaldo
            </button>
            <p> Ronaldo Supported {ronaldoCount} times</p>
          </div>
        </div>
        <div className="py-2 m-2 flex items-center">
          <div className="flex flex-col items-center">
            <img
              src={Messi}
              alt="Messi"
            />
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => dispatch(messiIncrement())}>
              Support Messi
            </button>
            <p> Messi Supported {messiCount} times</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
