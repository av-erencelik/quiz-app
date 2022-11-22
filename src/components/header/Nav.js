import { useDispatch } from "react-redux";
import { choicesActions } from "../state/choices";
import { scoresActions } from "../state/scores";
import Button from "../ui/Button";
import Score from "./Score";

export default function Nav() {
  const dispatch = useDispatch();

  function newGame() {
    dispatch(choicesActions.changeIsEntertainment());
    dispatch(choicesActions.changeIsTopicChose());
    dispatch(choicesActions.changeIsDifficultyChose());
    dispatch(scoresActions.setWrongAnswers(0));
    dispatch(scoresActions.setScore(0));
  }

  return (
    <div className="nav-container">
      <ul className="nav">
        <li className="link">
          <Button onClick={newGame}>NEW QUIZ</Button>
        </li>
      </ul>
      <Score></Score>
    </div>
  );
}
