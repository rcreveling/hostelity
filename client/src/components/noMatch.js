import React from "react";

function NoMatch() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="jumbotron text-center">
            <h1>Sorry brew! I think you're a touch off the beaten path.<br />Go on back the way ya came now!</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;