import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function CricketBat() {
  return (
    <div className="container">
      <div className="card" style={{ width: '100%' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://tiimg.tistatic.com/fp/1/007/656/light-weight-and-good-quality-david-warner-creme-wooden-players-cricket-bats-202.jpg" className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>Cricket Bat</h1>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <button type="button" className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CricketBat;
