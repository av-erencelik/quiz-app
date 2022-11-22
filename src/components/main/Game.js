import { useEffect, useState } from "react";
import Question from "./Question";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { choicesActions } from "../state/choices";
import { scoresActions } from "../state/scores";

export default function Game(props) {
  const [questions, setQuestions] = useState("");
  const [isFetchingSuccessful, setIsFetchingSuccessful] = useState(false);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const dispatch = useDispatch();
  const bestScore = useSelector((state) => state.scores.bestScore);
  const Score = useSelector((state) => state.scores.score);
  const questionNumber = useSelector((state) => state.scores.questionNumber);
  const wrongAnswers = useSelector((state) => state.scores.wrongAnswers);
  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(bestScore));
  }, [bestScore]);
  useEffect(() => {
    if (Score > bestScore) {
      dispatch(scoresActions.setBestScore(Score));
    }
  }, [Score]);
  useEffect(() => {
    async function getQuestions() {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${
            props.topicCode
          }&difficulty=${props.difficulty.toLowerCase()}&type=multiple`
        );
        const data = await response.json();
        if (data.results.length === 0) {
          throw new Error(
            "Something Happened. Please, Select Another Topic Or Difficulty"
          );
        }
        const fetchedQuestions = data.results.map((question) => {
          return {
            question: question.question,
            allAnswers: sortRandomly(
              question.incorrect_answers.concat(question.correct_answer)
            ),
            correctAnswer: question.correct_answer,
          };
        });
        setQuestions(fetchedQuestions);
      } catch (error) {
        alert(error);
        dispatch(choicesActions.changeIsEntertainment());
        dispatch(choicesActions.changeIsTopicChose());
        dispatch(choicesActions.changeIsDifficultyChose());
        return;
      }
      setIsFetchingSuccessful(true);
    }
    getQuestions();
  }, [props.difficulty, props.topicCode]);

  function incrementQuestionNumber() {
    if (questionNumber === 9) {
      setIsQuizOver(true);
      dispatch(scoresActions.setQuestionNumber(0));
      return;
    }
    dispatch(scoresActions.incrementQuestionNumber());
  }
  function onCorrectAnswer() {
    dispatch(scoresActions.incrementScore());
  }
  function onWrongAnswer() {
    dispatch(scoresActions.incrementWrongAnswers());
  }
  function sortRandomly(answers) {
    let array = answers;
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  function newGame() {
    dispatch(choicesActions.changeIsEntertainment());
    dispatch(choicesActions.changeIsTopicChose());
    dispatch(choicesActions.changeIsDifficultyChose());
    dispatch(scoresActions.setWrongAnswers(0));
    dispatch(scoresActions.setScore(0));
  }
  return (
    <div className="game-container">
      {isFetchingSuccessful && !isQuizOver && (
        <>
          <div className="topic-difficulty">
            <h3>Category: {props.topic}</h3>
            <h3>Difficulty: {props.difficulty}</h3>
          </div>
          <Question
            question={questions[questionNumber].question}
            answers={questions[questionNumber].allAnswers}
            correctAnswer={questions[questionNumber].correctAnswer}
            onCorrectAnswer={onCorrectAnswer}
            incrementQuestionNumber={incrementQuestionNumber}
            onWrongAnswer={onWrongAnswer}
          ></Question>
        </>
      )}
      {isQuizOver && (
        <>
          <div className="results">
            <h3 className="title">TRUE: {Score}</h3>
            <h3 className="title">FALSE: {wrongAnswers}</h3>
          </div>
          <div className="new">
            <Button onClick={newGame}>NEW QUIZ</Button>
          </div>
        </>
      )}
    </div>
  );
}
