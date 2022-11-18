import Nav from "./Nav";
import { MdQuiz } from "react-icons/md";
export default function Header() {
  return (
    <header className="header">
      <MdQuiz className="icon"></MdQuiz>
      <h1 className="header-title title">TRIVIA QUIZ</h1>
      <Nav></Nav>
    </header>
  );
}
