export default function LevelChoose(props) {
  return (
    <div className="level-choose">
      <h3 className="title level-title">Choose A Difficulty</h3>
      <div className="difficulty-container">
        <div className="difficulty" onClick={props.onDiffcultyChoose}>
          Easy
        </div>
        <div className="difficulty" onClick={props.onDiffcultyChoose}>
          Medium
        </div>
        <div className="difficulty" onClick={props.onDiffcultyChoose}>
          Hard
        </div>
      </div>
    </div>
  );
}
