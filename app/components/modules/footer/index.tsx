/* eslint-disable @next/next/no-img-element */
import React from "react";

const MainFooter = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="u-center-text">
          <a href="#">
            <img
              src="/img/poly_logo.svg"
              className="img-fluid navbar-brand"
              alt="poly_logo"
            />
          </a>
          <div className="social_media">
            <a href="">
              <img
                src="/img/facebook-logo.png"
                className="facebook img-fluid"
                alt="facebook-logo"
              />
            </a>
            <a href="">
              {" "}
              <img
                src="/img/instagram_logo.png "
                alt="instagram_logo"
                className="instagram img-fluid"
              />
            </a>
            <a href="">
              <img
                src="/img/twitte_logo.png"
                alt="twitte_logo"
                className="twitter img-fluid"
              />
            </a>
            <a href="">
              {" "}
              <img
                src="/img/youtube_log.png"
                alt="youtube_log"
                className="youtube img-fluid"
              />
            </a>
          </div>
          <div className="copyright">
            <h4>© 2022 POILY - 2022</h4>
          </div>
        </div>
        <img src="/img/footer_bg.png" alt="" className="footer-img" />
      </div>
    </footer>
  );
};

export default MainFooter;
