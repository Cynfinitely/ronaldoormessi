import "../../assets/css/Main.css";
import Ronaldo3D from "../../assets/images/ronaldo3D.png";
import Messi3D from "../../assets/images/messi3D.png";
import type { AppDispatch, RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  messiIncrement,
  ronaldoIncrement,
} from "../../redux/slices/counterReducer";
import { useState } from "react";

const Main = () => {
  const [ronaldoButtonClicked, setRonaldoButtonClicked] =
    useState<boolean>(false);
  const [messiButtonClicked, setMessiButtonClicked] = useState<boolean>(false);
  const ronaldoCount = useSelector(
    (state: RootState) => state.counter.ronaldoValue
  );
  const messiCount = useSelector(
    (state: RootState) => state.counter.messiValue
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleRonaldoButtonClick = () => {
    dispatch(ronaldoIncrement());
    setRonaldoButtonClicked(true);
  };
  const handleMessiButtonClick = () => {
    setMessiButtonClicked(true);
    dispatch(messiIncrement());
  };

  return (
    <div className="h-screen">
      <div className="compare flex flex-col md:flex-row justify-evenly h-full ">
        <div className="py-2 m-2 flex flex-col items-center content-evenly justify-center">
          <div className="m-2">
            <img
              src={Ronaldo3D}
              alt="Ronaldo"
              className="ronaldo w-28 h-28 md:w-96 md:h-96"
            />
          </div>
          <div className="flex flex-col items-center">
            <>
              {" "}
              {ronaldoButtonClicked ? (
                <div className="ronaldoAfterText m-2">
                  <p className="text-xs text-center md:text-xl">
                    SUIII!!!
                    <br /> You are Ronaldo Supporter!<br></br>Ronaldo Supported{" "}
                    {ronaldoCount} times!
                  </p>
                </div>
              ) : (
                <button
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-sm px-2 py-1 md:text-xl md:px-5 md:py-2.5 text-center mr-2 mb-2"
                  onClick={handleRonaldoButtonClick}>
                  Support Ronaldo
                </button>
              )}
            </>
          </div>
        </div>
        <div className="py-2 m-2 flex flex-row items-center content-evenly justify-center">
          <div className="m-6">
            <h1 className="text-base md:text-4xl">{ronaldoCount}</h1>
          </div>
          <div className="">
            <p className="text-2xl">-</p>
          </div>
          <div className="m-6">
            <h1 className="text-base md:text-4xl">{messiCount}</h1>
          </div>
        </div>
        <div className="py-2 m-2 flex flex-col items-center content-evenly justify-center">
          <div className="m-2">
            <img
              src={Messi3D}
              alt="Messi"
              className="messi w-32 h-32 md:w-96 md:h-96"
            />
          </div>
          <div className="flex flex-col items-center">
            <>
              {" "}
              {messiButtonClicked ? (
                <div className="messiAfterText m-2">
                  <p className="text-xs text-center md:text-xl">
                    {" "}
                    ENCARA MESSI!! <br />
                    You are Messi Supporter! <br></br> Messi Supported{" "}
                    {messiCount} times!
                  </p>
                </div>
              ) : (
                <button
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 md:text-xl md:px-5 md:py-2.5  text-center mr-2 mb-2"
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
