export default function Topic(props) {
  return (
    <div className="topic" onClick={props.onTopicChoose}>
      {props.children}
    </div>
  );
}
