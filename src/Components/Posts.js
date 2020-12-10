import React from "react";

function Posts() {
  return (
    <div className="post">
      <div className="post__actu">
        <div className="post__picture"></div>
        <div className="post__post">
          <div className="post__score">
            <div className="score__dom">
              <span>Conquerants de Caen</span>
              <p className="post__number1">26</p>
            </div>
            <div className="score__space">
              <p>:</p>
            </div>
            <div className="score__ext">
              <p className="post__number2">13</p>
              <span>Argonaute</span>
            </div>
          </div>
          <div className="post__information"></div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
