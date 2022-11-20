import Topic from "./Topic";

export default function TopicChoose(props) {
  return (
    <>
      <h3 className="title topic-title">Choose A Topic</h3>
      <div className="topics">
        {props.topics.map((topic) => {
          return (
            <Topic onTopicChoose={props.onTopicChoose} key={topic}>
              {topic}
            </Topic>
          );
        })}
      </div>
    </>
  );
}
