/**
 *
 * ImageShowcase
 *
 */

import React from "react";
import "./ImageShowcase.css";
import imgShowcase1 from "../../assets/img/bg-showcase-1.jpg";
import imgShowcase2 from "../../assets/img/bg-showcase-2.jpg";
import imgShowcase3 from "../../assets/img/bg-showcase-3.jpg";

function ImageShowcase(props) {
  return (
    <div className="ImageShowcase">
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                background: `url(${imgShowcase1})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100% 100%`
              }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Organise your event</h2>
              <p className="lead mb-0">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{
                background: `url(${imgShowcase2})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100% 100%`
              }}
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Invite Guest</h2>
              <p className="lead mb-0">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                background: `url(${imgShowcase3})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100% 100%`
              }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use &amp; Customize</h2>
              <p className="lead mb-0">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageShowcase;
