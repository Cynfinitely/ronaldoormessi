import "./App.css";
import pic from './assets/images/ronaldovmessi2.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <h1 className="text-3xl font-bold underline text-center">
          Ronaldo or Messi?
        </h1>
      </header>
      <div className="container flex flex-col align-middle text-center">
        <div className="img-container w-24 h-">
          <img src={pic} alt="" />
        </div>
        <div className="count-container">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Support Ronaldo
          </button>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Support Messi
          </button>
        </div>
      </div>

      <div className="Credits border-solid border-2 border-orange-600"></div>
    </div>
  );
}

export default App;
