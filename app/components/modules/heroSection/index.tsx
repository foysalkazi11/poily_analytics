/* eslint-disable @next/next/no-img-element */
import React from "react";
import Lottie from "react-lottie-player";
import green_light from "../../../constants/homeHeroSection/green_light.json";
import data_lottie from "../../../constants/homeHeroSection/data_lottie.json";
import bar_graph_lottie from "../../../constants/homeHeroSection/bar_graph_lottie.json";
import lady_lottie from "../../../constants/homeHeroSection/lady_lottie.json";

const MainHeroSection = () => {
  return (
    <section className="section_banner gradient__bg--color">
      <div className="container">
        <div className="u-center-text">
          <div className="max__80">
            <h1 className="banner__title">
              Let Us Tell your{" "}
              <span className="text__element">
                Program
                <img
                  src="/img/text-elment.png"
                  className="text__element--img"
                  alt=""
                />
              </span>
              Data Story{" "}
              <span className="text__green">So that it is heard </span>
              <span className="text__black">Loud and Clear</span>
            </h1>
            <p className="paragraph-primary paddting__top--16 padding__bottom_60">
              Transform your lifestyle health program data into captivating
              stories. <br />
              Contact us today for a <strong>FREE</strong> data story
              assessment!
            </p>
            <a href="" className="btn btn-primary z-index-2">
              Get Free Consult
            </a>
            <div className="banner__review--card z-index-2">
              <div className="banner__review--img">
                <img
                  src="/img/Maria_Barander.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p className="banner__review--content">
                “Poily Analytics has completely transformed how we present our
                data to stakeholders. It’s helped us make more informed
                decisions and communicate our impact more effectively.”
              </p>
              <p className="banner__review--name">Adam Belcastro</p>
            </div>
          </div>
        </div>
        <div className="green-line-lottie">
          <Lottie
            animationData={green_light}
            // background="transparent"
            speed={1}
            loop
            play
          ></Lottie>
        </div>
        <div className="data-lottie z-index-2">
          <Lottie
            animationData={data_lottie}
            // background="transparent"
            speed={1}
            loop
            play
          ></Lottie>
        </div>
        <div className="bar-graph-lottie z-index-2">
          <Lottie
            animationData={bar_graph_lottie}
            // background="transparent"
            speed={1}
            loop
            play
          ></Lottie>
        </div>
        <div className="lady-lottie ">
          <Lottie
            animationData={lady_lottie}
            // background="transparent"
            speed={1}
            loop
            play
          ></Lottie>
        </div>
      </div>
    </section>
  );
};

export default MainHeroSection;
