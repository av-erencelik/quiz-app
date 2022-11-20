import React, { useState } from "react";
export const TopicLevelContext = React.createContext(null);

export default function ContextProvider(props) {
  const [isEntertainment, setIsEntertainment] = useState(false);
  const [isTopicChose, setIsTopicChose] = useState(false);
  const [isDifficultyChose, setIsDifficultyChose] = useState(false);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [bestScore, setBestScore] = useState(0);
  const [Score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  return (
    <TopicLevelContext.Provider
      value={{
        isEntertainment,
        setIsEntertainment,
        isTopicChose,
        setIsTopicChose,
        isDifficultyChose,
        setIsDifficultyChose,
        topic,
        setTopic,
        difficulty,
        setDifficulty,
        bestScore,
        setBestScore,
        Score,
        setScore,
        questionNumber,
        setQuestionNumber,
        wrongAnswers,
        setWrongAnswers,
      }}
    >
      {props.children}
    </TopicLevelContext.Provider>
  );
}
