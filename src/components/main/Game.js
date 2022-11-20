import { useEffect, useState } from "react";

export default function Game(props) {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    async function getQuestions() {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${
          props.topicCode
        }&difficulty=${props.difficulty.toLowerCase()}&type=multiple`
      );
      const data = await response.json();
      const fetchedQuestions = data.results.map((question) => {
        return {
          question: question.question,
          correctAnswer: question.correct_answer,
        };
      });
      setQuestions(fetchedQuestions);
    }
    getQuestions();
  }, [props.difficulty, props.topicCode]);
  return (
    <div className="question-container">
      <div></div>
    </div>
  );
}
