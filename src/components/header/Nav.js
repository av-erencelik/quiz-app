import Button from "../ui/Button";

export default function Nav() {
  return (
    <ul className="nav">
      <li className="link">
        <Button>New Quiz</Button>
      </li>
      <li className="link">
        <Button>Restart Quiz</Button>
      </li>
    </ul>
  );
}
