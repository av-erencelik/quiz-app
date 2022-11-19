import { useEffect } from "react";

export default function Game(props) {
  useEffect(() => {
    async function getQuestions() {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${
          props.topicCode
        }&difficulty=${props.difficulty.toLowerCase()}&type=multiple`
      );
      const data = await response.json();
    }
    getQuestions();
  }, [props.difficulty, props.topicCode]);
  return (
    <div>
      <div></div>
    </div>
  );
}
