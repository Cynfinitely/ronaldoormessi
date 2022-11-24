import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <h1 className="text-3xl font-bold underline text-center">
          Ronaldo or Messi?
        </h1>
      </header>
      <div className="container flex items-stretch">
        <div className="Ronaldo border-solid border-2 border-orange-600 py-4">
          <img src="" alt="Ronaldo" />
        </div>
        <div className="Count border-solid border-2 border-orange-600 py-12">
          <button>Support Ronaldo</button>
          <button>Support Messi</button>
        </div>
        <div className="Messi border-solid border-2 border-orange-600 py-8">
          <img src="" alt="Messi" />
        </div>
      </div>

      <div className="Credits border-solid border-2 border-orange-600"></div>
    </div>
  );
}

export default App;
