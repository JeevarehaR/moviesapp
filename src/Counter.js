import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(like + 1);
  //conditional styling
  //const styles = { background: like > 5 ? "deepskyblue" : "orange" };
  const likePercent = (like / (like + disLike)) * 100;
  return (
    <div>
      {/* <div className="counter-container"> */}
      {/*like > 10 ? <p>You have won many ❤️! </p> : null*/}
      {/* <progress
        className="progress-container"
        max="100"
        value={Number.isNaN(likePercent) ? 0 : likePercent}
      ></progress> */}

      <div className="button-container">
        <IconButton color="primary" aria-label="like">
          <Badge badgeContent={like} onClick={incrementLike} color="success">
            👍
          </Badge>
        </IconButton>
        <IconButton color="error" aria-label="disLike">
          <Badge
            badgeContent={disLike}
            onClick={incrementDisLike}
            color="error"
          >
            👎
          </Badge>
        </IconButton>
      </div>
    </div>
  );
}
