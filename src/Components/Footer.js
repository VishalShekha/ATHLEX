import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        {/* Footer Links */}
        <div className="container p-4">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Footer Content</h5>

              <p>
                Here you can use rows and columns to organize your footer content. This is a simple footer example using Bootstrap.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="https://yourwebsite.com/">
            YourWebsite.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
