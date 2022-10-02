import { useState } from "react";

const Quij = () => {
  const [oneQue, setoneQue] = useState("");
  const answersChecker = () => {
    console.log(oneQue);
  };
  return (
    <>
      <h1>Quiz Here 🫡</h1>
      <p>Get 1 point for each question 👨‍💻</p>
      {/* 1st Question */}
      <div>
        <p>
          <strong>
            1. What is the third angle for the triangle where &#8736;A = 45
            <sup>o</sup> and &#8736;B = 60
            <sup>o</sup>, what is &#8736;C ?
          </strong>
        </p>
        <input
          type="radio"
          id="60"
          name="one_answer"
          value="60"
          onChange={setoneQue}
        />
        <label htmlFor="60">
          60<sup>o</sup>
        </label>
        <input
          type="radio"
          id="75"
          name="one_answer"
          value="75"
          onChange={setoneQue}
        />
        <label htmlFor="75">
          75<sup>o</sup>
        </label>
        <input
          type="radio"
          id="90"
          name="one_answer"
          value="90"
          onChange={setoneQue}
        />
        <label htmlFor="90">
          90<sup>o</sup>
        </label>
      </div>
      {/* 2nd Question */}
      <div>
        <p>
          <strong>
            2. Is it an Obtuse Triangle or a Right Triangle or an Acute Triangle
            ?, &#8736;A = 60
            <sup>o</sup>, &#8736;B = 90
            <sup>o</sup> and &#8736;C = 30<sup>o</sup>?
          </strong>
        </p>
        <input type="radio" id="Obtuse" name="two_answer" value="Obtuse" />
        <label htmlFor="Obtuse">Obtuse</label>
        <input type="radio" id="Right" name="two_answer" value="Right" />
        <label htmlFor="Right">Right</label>
        <input type="radio" id="Acute" name="two_answer" value="Acute" />
        <label htmlFor="Acute">Acute</label>
      </div>
      {/* 3rd Question */}
      <div>
        <p>
          <strong>
            3. Which of the following is not a Pythagorean triplet ?
          </strong>
        </p>
        <input type="radio" id="Oone" name="three_answer" value="Oone" />
        <label htmlFor="Oone">3,4,5</label>
        <input type="radio" id="Otwo" name="three_answer" value="Otwo" />
        <label htmlFor="Otwo">5,8,12</label>
        <input type="radio" id="Othree" name="three_answer" value="Othree" />
        <label htmlFor="Othree">5,12,13</label>
      </div>
      {/* 4th Question */}
      <div>
        <p>
          <strong>
            4. What is the area of a right triangle having height 5cm and base
            4cm ?
          </strong>
        </p>
        <input type="radio" id="Oone" name="four_answer" value="Oone" />
        <label htmlFor="Oone">
          5cm<sup>2</sup>
        </label>
        <input type="radio" id="Otwo" name="four_answer" value="Otwo" />
        <label htmlFor="Otwo">
          10cm<sup>2</sup>
        </label>
        <input type="radio" id="Othree" name="four_answer" value="Othree" />
        <label htmlFor="Othree">
          15cm<sup>2</sup>
        </label>
      </div>
      <br />
      <button onClick={answersChecker}>Check →</button>
      <br />
      {/*AotMessage ? <p>{AotMessage}</p> : ""*/}
    </>
  );
};

export default Quij;
