import "../assets/css/Main.css";
import Ronaldo3D from "../assets/images/ronaldo3D.png";
import Messi3D from "../assets/images/messi3D.png";
import type { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMessiLikes,
  fetchRonaldoLikes,
  messiIncrement,
  ronaldoIncrement,
} from "../redux/slices/counterReducer";
import { useEffect, useState } from "react";

const Main = () => {
  const ronaldoCount = useSelector(
    (state: RootState) => state.counter.ronaldoValue
  );
  const messiCount = useSelector(
    (state: RootState) => state.counter.messiValue
  );
  const status = useSelector((state: RootState) => state.counter.status);
  const dispatch = useDispatch<AppDispatch>();
  const [ronaldoButtonClicked, setRonaldoButtonClicked] = useState(false);
  const [messiButtonClicked, setMessiButtonClicked] = useState(false);

  const handleRonaldoButtonClick = () => {
    setRonaldoButtonClicked(true);
    dispatch(ronaldoIncrement());
  };
  const handleMessiButtonClick = () => {
    setMessiButtonClicked(true);
    dispatch(messiIncrement());
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMessiLikes());
      dispatch(fetchRonaldoLikes());
    }
  }, [status, dispatch]);

  return (
    <div className="h-full">
      <div className="compare flex flex-row justify-evenly h-full">
        <div className="py-2 m-2 flex flex-col items-center content-evenly justify-center">
          <div className="m-2">
            <img
              src={Ronaldo3D}
              alt="Ronaldo"
              className="ronaldo"
            />
          </div>
          <div className="flex flex-col items-center">
            <>
              {" "}
              {ronaldoButtonClicked ? (
                <div>
                  You are Ronaldo Supporter! Ronaldo Supported {ronaldoCount}{" "}
                  times!
                </div>
              ) : (
                <button
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={handleRonaldoButtonClick}>
                  Support Ronaldo
                </button>
              )}
            </>
          </div>
        </div>
        <div className="py-2 m-2 flex flex-row items-center content-evenly justify-center">
          <div className="m-6">
            <h1 className="text-4xl">{ronaldoCount}</h1>
          </div>
          <div className="m-6">
            <h1 className="text-4xl">{messiCount}</h1>
          </div>
        </div>
        <div className="py-2 m-2 flex flex-col items-center content-evenly justify-center">
          <div className="m-2">
            <img
              src={Messi3D}
              alt="Messi"
              className="messi"
            />
          </div>
          <div className="flex flex-col items-center">
            <>
              {" "}
              {messiButtonClicked ? (
                <div>
                  You are Messi Supporter! Messi Supported {messiCount} times!
                </div>
              ) : (
                <button
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={handleMessiButtonClick}>
                  Support Messi
                </button>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
