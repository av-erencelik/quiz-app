import { useState } from "react";

export default function Question(props) {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  function getDecodedString(str) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${str}`,
      "text/html"
    ).body.textContent;
    return decodedString;
  }
  let correctAnswer = getDecodedString(props.correctAnswer);
  let answers = props.answers;
  function checkAnswer(e) {
    if (isQuestionAnswered) {
      console.log(1);
      return;
    }
    setIsQuestionAnswered(true);
    if (e.target.innerHTML === correctAnswer) {
      props.onCorrectAnswer();
      console.log(e.target.classList);
      e.target.classList.add("success");
    } else {
      props.onWrongAnswer();
      e.target.classList.add("danger");
    }
    setTimeout(() => {
      props.incrementQuestionNumber();
      e.target.classList.remove("success");
      e.target.classList.remove("danger");
      setIsQuestionAnswered(false);
    }, 1500);
  }
  return (
    <div className="question-container">
      <p className="question">{getDecodedString(props.question)}</p>
      <div className="choices">
        <button
          className="choice"
          onClick={checkAnswer}
          disabled={isQuestionAnswered}
        >
          {getDecodedString(answers[0])}
        </button>
        <button
          className="choice"
          onClick={checkAnswer}
          disabled={isQuestionAnswered}
        >
          {getDecodedString(answers[1])}
        </button>
        <button
          className="choice"
          onClick={checkAnswer}
          disabled={isQuestionAnswered}
        >
          {getDecodedString(answers[2])}
        </button>
        <button
          className="choice"
          onClick={checkAnswer}
          disabled={isQuestionAnswered}
        >
          {getDecodedString(answers[3])}
        </button>
      </div>
    </div>
  );
}
