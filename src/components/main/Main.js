import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { choicesActions } from "../state/choices";
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
  const dispatch = useDispatch();
  const isEntertainment = useSelector((state) => state.choices.isEntertainment);
  const isDifficultyChose = useSelector(
    (state) => state.choices.isDifficultyChose
  );
  const isTopicChose = useSelector((state) => state.choices.isTopicChose);
  const topic = useSelector((state) => state.choices.topic);
  const difficulty = useSelector((state) => state.choices.difficulty);
  const [topicCode, setTopicCode] = useState(null);

  useEffect(() => {
    if (isEntertainment && isTopicChose) {
      setTopicCode(entertainmentTopicCode[entertainmentTopics.indexOf(topic)]);
    } else {
      setTopicCode(topicCodes[topics.indexOf(topic) - 1]);
    }
  }, [topic, isEntertainment, isTopicChose]);
  function onTopicChoose(e) {
    if (e.target.innerText === "Entertainment") {
      dispatch(choicesActions.changeIsEntertainment());
      return;
    }
    dispatch(choicesActions.changeIsTopicChose());
    dispatch(choicesActions.setTopic(e.target.innerText));
  }
  function onDifficultyChoose(e) {
    dispatch(choicesActions.changeIsDifficultyChose());
    dispatch(choicesActions.setDifficulty(e.target.innerText));
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
        {isTopicChose && isDifficultyChose && (
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
