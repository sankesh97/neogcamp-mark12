import { useRef, useState } from "react";

const Aot = () => {
  const aSideOne = useRef();
  const aSideTwo = useRef();
  const [AotMessage, setAotMessage] = useState("");
  const areaFinder = () => {
    let area = 0.5 * aSideOne.current.value * aSideTwo.current.value;
    setAotMessage(
      `The Area of the triangle having above two side lengths is ${area}`
    );
  };
  return (
    <>
      <h1>Area Finder 🤯</h1>
      <p>Please enter the length and height of the triangle.</p>
      <input type="number" ref={aSideOne} placeholder="Side One"></input>
      <input type="number" ref={aSideTwo} placeholder="Side Two"></input>
      <br />
      <button onClick={areaFinder}>Check →</button>
      <br />
      {AotMessage ? <p>{AotMessage}</p> : ""}
    </>
  );
};

export default Aot;
