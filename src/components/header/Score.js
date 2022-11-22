import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scoresActions } from "../state/scores";

export default function Score(props) {
  const dispatch = useDispatch();
  const bestScore = useSelector((state) => state.scores.bestScore);
  const Score = useSelector((state) => state.scores.score);
  useEffect(() => {
    const best = JSON.parse(localStorage.getItem("bestScore"));
    if (best) {
      dispatch(scoresActions.setBestScore(Number(best)));
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
