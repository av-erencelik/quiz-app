export default function LevelChoose(props) {
  return (
    <div className="level-choose">
      <h3 className="title level-title">Choose A Difficulty</h3>
      <div className="difficulty-container">
        <div className="difficulty" onClick={props.onDifficultyChoose}>
          Easy
        </div>
        <div className="difficulty" onClick={props.onDifficultyChoose}>
          Medium
        </div>
        <div className="difficulty" onClick={props.onDifficultyChoose}>
          Hard
        </div>
      </div>
    </div>
  );
}
