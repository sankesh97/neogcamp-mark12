import { useState } from "react";

const Quij = () => {
  const QueBank = [
    {
      question: `
    1. What is the third angle for the triangle where &#8736;A = 45
    <sup>o</sup> and &#8736;B = 60
    <sup>o</sup>, what is &#8736;C ?
  `,
      answer: "75<sup>o</sup>",
      options: ["60<sup>o</sup>", "75<sup>o</sup>", "90<sup>o</sup>"],
      name: `QueOne`,
    },
    {
      question: `2. Is it an Obtuse Triangle or a Right Triangle or an Acute Triangle
    ?, &#8736;A = 60
    <sup>o</sup>, &#8736;B = 90
    <sup>o</sup> and &#8736;C = 30<sup>o</sup>?`,
      answer: "Right",
      options: ["Obtuse", "Right", "Acute"],
      name: `QueTwo`,
    },
    {
      question: `3. Which of the following is not a Pythagorean triplet ?`,
      answer: "5,8,12",
      options: ["3,4,5", "5,8,12", "5,12,13"],
      name: `QueThree`,
    },
    {
      question: `4. What is the area of a right triangle having height 5cm and base
      4cm ?`,
      answer: `5cm<sup>2</sup>`,
      options: [`5cm<sup>2</sup>`, `10cm<sup>2</sup>`, `15cm<sup>2</sup>`],
      name: `QueFour`,
    },
  ];
  const [answersCheck, setAnswersCheck] = useState({});
  const [QuijMessage, setQuijMessage] = useState("");
  const answersChecker = (event) => {
    setAnswersCheck((prevState) => {
      let tempObj = prevState;
      tempObj[event.target.name] = event.target.value;
      return tempObj;
    });
  };
  const Checkit = () => {
    let pointsArray = QueBank.filter((element) => {
      return element.answer === answersCheck[element.name];
    });
    if (pointsArray.length === 0) {
      setQuijMessage(
        "Sorry, All the answers are wrong! / You have not attempted the questions"
      );
    } else {
      setQuijMessage(`Hey!, You have scored ${pointsArray.length}/4.`);
    }
  };
  return (
    <>
      <h1>Quiz Here 🫡</h1>
      <p>Get 1 point for each question 👨‍💻</p>
      {/* 1st Question */}
      {QueBank.map((ele) => {
        return (
          <div key={ele.name}>
            <p dangerouslySetInnerHTML={{ __html: ele.question }}></p>
            <input
              type="radio"
              id={ele.options[0]}
              name={ele.name}
              value={ele.options[0]}
              onChange={answersChecker}
            />
            <label
              htmlFor={ele.options[0]}
              dangerouslySetInnerHTML={{ __html: ele.options[0] }}
            ></label>
            <input
              type="radio"
              id={ele.options[1]}
              name={ele.name}
              value={ele.options[1]}
              onChange={answersChecker}
            />
            <label
              htmlFor={ele.options[1]}
              dangerouslySetInnerHTML={{ __html: ele.options[1] }}
            ></label>
            <input
              type="radio"
              id={ele.options[2]}
              name={ele.name}
              value={ele.options[2]}
              onChange={answersChecker}
            />
            <label
              htmlFor={ele.options[2]}
              dangerouslySetInnerHTML={{ __html: ele.options[2] }}
            ></label>
          </div>
        );
      })}

      <br />
      <button onClick={Checkit}>Check →</button>
      <br />
      {QuijMessage ? <p>{QuijMessage}</p> : ""}
    </>
  );
};

export default Quij;
