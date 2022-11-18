import Button from "../ui/Button";
import Score from "./Score";

export default function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav">
        <li className="link">
          <Button>NEW QUIZ</Button>
        </li>
        <li className="link">
          <Button>RESTART QUIZ</Button>
        </li>
      </ul>
      <Score></Score>
    </div>
  );
}
