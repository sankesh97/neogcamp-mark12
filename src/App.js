import "./App.css";
import Iiat from "./sections/Iiat";
import Hf from "./sections/Hf";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="iiat">
        <h2>Triangle Yojana!</h2>
        <nav>
          <a href="#iiat">Is it a Triangle ? 🤔</a>
          <a href="#quiz">Quiz</a>
          <a href="#hf">HypotenuseFinder</a>
          <a href="#aot">Area of Triangle</a>
        </nav>
      </header>
      <section id="iiat">
        <Iiat></Iiat>
      </section>
      <section id="quiz">
        <h1>Quiz</h1>
      </section>
      <section id="hf">
        <Hf></Hf>
      </section>
      <section id="aot">
        <h1>Area of Triangle</h1>
      </section>
    </div>
  );
}

export default App;
