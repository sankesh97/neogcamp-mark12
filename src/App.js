import "./App.css";
import Iiat from "./sections/Iiat";
import Hf from "./sections/Hf";
import Aot from "./sections/Aot";
import Quij from "./sections/Quij";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="iiat">
        <h2>Triangle Yojana!</h2>
        <nav>
          <a href="#iiat">Is it a Triangle ? 🤔</a>
          <a href="#quiz">Quiz Here 🫡</a>
          <a href="#hf">HypotenuseFinder 👀</a>
          <a href="#aot">Area of Triangle 🤯</a>
        </nav>
      </header>
      <section id="iiat">
        <Iiat></Iiat>
      </section>
      <section id="quiz">
        <Quij></Quij>
      </section>
      <section id="hf">
        <Hf></Hf>
      </section>
      <section id="aot">
        <Aot></Aot>
      </section>
    </div>
  );
}

export default App;
