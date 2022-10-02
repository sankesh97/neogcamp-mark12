import { useRef, useState } from "react";

const Hf = () => {
  const sideOne = useRef();
  const sideTwo = useRef();
  const [hfMessage, setHfMessage] = useState("");
  const hypotenuseFinder = () => {
    let hypo = Math.sqrt(
      Math.pow(parseInt(sideOne.current.value), 2) +
        Math.pow(parseInt(sideTwo.current.value), 2)
    );
    setHfMessage(
      `The Hypotenuse of the triangle having above two sides is ${hypo}`
    );
  };
  return (
    <>
      <h1>Hypotenuse Finder 👀</h1>
      <input type="number" ref={sideOne} placeholder="Side One"></input>
      <input type="number" ref={sideTwo} placeholder="Side Two"></input>
      <br />
      <button onClick={hypotenuseFinder}>Check →</button>
      <br />
      {hfMessage ? <p>{hfMessage}</p> : ""}
    </>
  );
};

export default Hf;
