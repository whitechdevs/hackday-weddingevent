/**
 *
 * Masthead
 *
 */

import React from "react";
import "./Masthead.css";
import logo from "../../assets/img/logo.png";

function Masthead(props) {
  return (
    <div className="Masthead">
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <img src={logo} />
              <h1 className="mb-5">
                Wedding Organiser
              </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto" >
                <div className="form-row">
                  <div className="col-12">
                    <a href="https://form.jotform.co/90279100192855">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Book Now
                    </button>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Masthead;
