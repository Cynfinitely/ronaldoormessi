import "../assets/css/Main.css";
import Ronaldo from "../assets/images/Ronaldo.jpg";
import Messi from "../assets/images/Messi.jpg";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { ronaldoIncrement } from "../redux/slices/ronaldoCounterSlice";
import { messiIncrement } from "../redux/slices/messiCounterReducer";

const Main = () => {
  const ronaldoCount = useSelector(
    (state: RootState) => state.ronaldoCounter.value
  );
  const messiCount = useSelector(
    (state: RootState) => state.messiCounter.value
  );
  const dispatch = useDispatch();

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
            <p> Ronaldo Supported {ronaldoCount} time</p>
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
            <p> Messi Supported {messiCount} time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
