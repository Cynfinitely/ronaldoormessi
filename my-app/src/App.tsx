import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="myContainer flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
