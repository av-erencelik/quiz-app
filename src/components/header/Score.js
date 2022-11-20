import { useContext, useEffect } from "react";
import { TopicLevelContext } from "../state/context";

export default function Score(props) {
  const { Score, bestScore, setBestScore } = useContext(TopicLevelContext);
  useEffect(() => {
    const best = JSON.parse(localStorage.getItem("bestScore"));
    if (best) {
      setBestScore(Number(best));
    }
  }, []);
  return (
    <div className="score-container">
      <h3 className="score">
        SCORE: <span> {Score}</span>
      </h3>
      <h3 className="score">
        BEST SCORE: <span> {bestScore}</span>
      </h3>
    </div>
  );
}
