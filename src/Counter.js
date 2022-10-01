import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  //conditional styling
  const styles = { background: like > 5 ? "deepskyblue" : "orange" };
  const likePercent = (like / (like + disLike)) * 100;
  return (
    <div className="counter-container">
      {like > 10 ? <p>You have won many ❤️! </p> : null}
      <progress
        className="progress-container"
        max="100"
        value={Number.isNaN(likePercent) ? 0 : likePercent}
      ></progress>

      <div className="button-container">
        <button style={styles} onClick={() => setLike(like + 1)}>
          👍 {like}
        </button>
        <button onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button>
      </div>
    </div>
  );
}
