import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Movie({ movie }) {
  //conditional styling
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);

  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}{" "}
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="expand"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            {movie.rating}⭐
          </p>
        </div>

        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
