import React, { useState } from "react";
export const TopicLevelContext = React.createContext(null);

export default function ContextProvider(props) {
  const [isEntertainment, setIsEntertainment] = useState(false);
  const [isTopicChose, setIsTopicChose] = useState(false);
  const [isDifficultyChose, setIsDifficultyChose] = useState(false);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

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
      }}
    >
      {props.children}
    </TopicLevelContext.Provider>
  );
}
