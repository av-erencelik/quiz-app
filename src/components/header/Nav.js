import Button from "../ui/Button";

export default function Nav() {
  return (
    <ul className="nav">
      <li className="link">
        <Button>NEW QUIZ</Button>
      </li>
      <li className="link">
        <Button>RESTART QUIZ</Button>
      </li>
    </ul>
  );
}
