export default function Topic(props) {
  return (
    <div className="topic" onClick={props.onTopicChoose}>
      <div>{props.children}</div>
    </div>
  );
}
