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
              <h2>Plan for your moments</h2>
              <p className="lead mb-0">
                Experience like never before to plan and orgasinse your most important moments in life. It is a one stop solution here, everything you need for
                your wedding is well planned orgasinsed here.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{
                background: `url(${imgShowcase2})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100% 250%`,
              }}
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Invite Guest</h2>
              <p className="lead mb-0">
               Inviting your familiy, your friends, your classmates and workmates to attend your wedding ceremony has never been easier like this, you can have them all
               as your private photographers to keep your most moments forever. 
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
                You will be enjoying your important moments with 100% control over your wedding photos like never before, you can tailor your own photos to your needs after anywhere anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageShowcase;
