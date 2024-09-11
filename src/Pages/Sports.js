import React from 'react';

function CardGrid() {
  return (
    <div className="container">
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Card title 4</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 5" />
            <div className="card-body">
              <h5 className="card-title">Card title 5</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 6" />
            <div className="card-body">
              <h5 className="card-title">Card title 6</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
