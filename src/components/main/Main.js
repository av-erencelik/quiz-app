import { useContext, useState } from "react";
import { TopicLevelContext } from "../state/context";
import { entertainmentTopics, topics } from "../state/topics";
import Game from "./Game";
import LevelChoose from "./LevelChoose";
import TopicChoose from "./TopicChoose";

export default function Main() {
  const {
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
  } = useContext(TopicLevelContext);
  function onTopicChoose(e) {
    if (e.target.innerText === "Entertainment") {
      setIsEntertainment(true);
      return;
    }
    setIsTopicChose(true);
    setTopic(e.target.innerText);
  }
  function onDiffcultyChoose(e) {
    setIsDifficultyChose(true);
    setDifficulty(e.target.innerText);
  }
  return (
    <div className="main-container">
      <div className="container">
        {!isTopicChose && !isEntertainment && (
          <TopicChoose
            topics={topics}
            onTopicChoose={onTopicChoose}
          ></TopicChoose>
        )}
        {!isTopicChose && isEntertainment && (
          <TopicChoose
            topics={entertainmentTopics}
            onTopicChoose={onTopicChoose}
          ></TopicChoose>
        )}
        {isTopicChose && !isDifficultyChose && (
          <LevelChoose onDiffcultyChoose={onDiffcultyChoose}></LevelChoose>
        )}
      </div>
    </div>
  );
}
