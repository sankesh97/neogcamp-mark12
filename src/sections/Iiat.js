import { useRef, useState } from "react";

const Iiat = () => {
  const angleOne = useRef();
  const angleTwo = useRef();
  const angleThree = useRef();
  const [IiatMessage, setIiatMessage] = useState("");
  const isItATriangle = () => {
    if (
      parseInt(angleOne.current.value) +
        parseInt(angleTwo.current.value) +
        parseInt(angleThree.current.value) ===
      180
    ) {
      setIiatMessage("You are right! It is a triangle");
    } else {
      setIiatMessage("No Bro! It is not a triangle");
    }
  };
  return (
    <>
      <h1>Is it a Triangle ? 🤔</h1>
      <input type="number" ref={angleOne} placeholder="Angle One"></input>
      <input type="number" ref={angleTwo} placeholder="Angle Two"></input>
      <input type="number" ref={angleThree} placeholder="Angle Three"></input>
      <br />
      <button onClick={isItATriangle}>Check →</button>
      <br />
      {IiatMessage ? <p>{IiatMessage}</p> : ""}
    </>
  );
};

export default Iiat;
