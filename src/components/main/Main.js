import { useEffect, useState } from "react";
import { entertainmentTopics, topics } from "../state/topics";
import Game from "./Game";
import LevelChoose from "./LevelChoose";
import TopicChoose from "./TopicChoose";

export default function Main() {
  const [allTopics, setAllTopics] = useState(topics);
  const [allEntertainmentTopics, setAllEntertainmentTopics] =
    useState(entertainmentTopics);
  const [isEntertainment, setIsEntertainment] = useState(false);
  const [isTopicChose, setIsTopicChose] = useState(false);
  const [topic, setTopic] = useState("");
  function onTopicChoose(e) {
    if (e.target.innerText === "Entertainment") {
      setIsEntertainment(true);
      return;
    }
    setIsTopicChose(true);
  }
  return (
    <div className="main-container">
      <div className="container">
        {!isTopicChose && !isEntertainment && (
          <TopicChoose
            topics={allTopics}
            onTopicChoose={onTopicChoose}
          ></TopicChoose>
        )}
        {!isTopicChose && isEntertainment && (
          <TopicChoose
            topics={allEntertainmentTopics}
            onTopicChoose={onTopicChoose}
          ></TopicChoose>
        )}
      </div>
    </div>
  );
}
