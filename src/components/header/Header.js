import Nav from "./Nav";
import { MdQuiz } from "react-icons/md";
export default function Header() {
  return (
    <header className="header">
      <div className="empty">
        <MdQuiz></MdQuiz>
      </div>
      <h1 className="header-title title">TRIVIA QUIZ</h1>
      <Nav></Nav>
    </header>
  );
}
