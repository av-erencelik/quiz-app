import { useContext, useEffect, useState } from "react";
import { TopicLevelContext } from "../state/context";
import {
  entertainmentTopicCode,
  entertainmentTopics,
  topicCodes,
  topics,
} from "../state/topics";
import Game from "./Game";
import LevelChoose from "./LevelChoose";
import TopicChoose from "./TopicChoose";

export default function Main() {
  const [topicCode, setTopicCode] = useState(null);
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
  useEffect(() => {
    if (isEntertainment && isTopicChose) {
      setTopicCode(entertainmentTopicCode[entertainmentTopics.indexOf(topic)]);
    } else {
      setTopicCode(topicCodes[topics.indexOf(topic) - 1]);
    }
  }, [topic, isEntertainment, isTopicChose]);
  function onTopicChoose(e) {
    if (e.target.innerText === "Entertainment") {
      setIsEntertainment(true);
      return;
    }
    setIsTopicChose(true);
    setTopic(e.target.innerText);
  }
  function onDifficultyChoose(e) {
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
          <LevelChoose onDifficultyChoose={onDifficultyChoose}></LevelChoose>
        )}
        {isTopicChose & isDifficultyChose && (
          <Game
            topic={topic}
            difficulty={difficulty}
            topicCode={topicCode}
          ></Game>
        )}
      </div>
    </div>
  );
}
