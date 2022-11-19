import { useContext } from "react";
import { TopicLevelContext } from "../state/context";
import Button from "../ui/Button";
import Score from "./Score";

export default function Nav() {
  const { setIsEntertainment, setIsTopicChose, setIsDifficultyChose } =
    useContext(TopicLevelContext);
  function newGame() {
    setIsEntertainment(false);
    setIsTopicChose(false);
    setIsDifficultyChose(false);
  }

  return (
    <div className="nav-container">
      <ul className="nav">
        <li className="link">
          <Button onClick={newGame}>NEW QUIZ</Button>
        </li>
        <li className="link">
          <Button>RESTART QUIZ</Button>
        </li>
      </ul>
      <Score></Score>
    </div>
  );
}
