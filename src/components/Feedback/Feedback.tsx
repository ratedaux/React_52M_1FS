import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);
  console.log("render");

  const addLike = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = ():void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">{likes}</div>
          <Button name="LIKE" type="button" onClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <div className="result">{dislike}</div>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </div>
      </div>
      <Button name="RESET RESULTS" type="button" onClick={resetResults} />
    </div>
  );
}

export default Feedback;