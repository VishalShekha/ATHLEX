import React from 'react';

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="text-center bg-light py-5">
        <h1 className="display-4">Welcome to Our Company</h1>
        <p className="lead">We are committed to excellence in everything we do.</p>
      </header>

      {/* Our Mission Section */}
      <section className="my-5">
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center">
          Our mission is to provide top-notch solutions that help businesses thrive and grow. We
          strive for innovation, quality, and customer satisfaction.
        </p>
      </section>

      {/* About Us Section */}
      <section className="my-5">
        <h2 className="text-center">About Us</h2>
        <p className="text-center">
          We are a team of passionate professionals dedicated to helping businesses unlock their
          full potential through cutting-edge technology and creative solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="my-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="card p-3 mb-4">
              <h5>Custom Software Development</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 mb-4">
              <h5>Web & Mobile App Development</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 mb-4">
              <h5>Cloud Solutions</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 mb-4">
              <h5>Consulting & IT Strategy</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="my-5">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center">If you'd like to work with us, feel free to get in touch!</p>
        <div className="text-center">
          <p>Email: contact@ourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
