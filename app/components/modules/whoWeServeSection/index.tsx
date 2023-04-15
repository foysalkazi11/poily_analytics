/* eslint-disable @next/next/no-img-element */
import whyWeServeObj from "@/app/constants/whoWeServeObj";
import React from "react";
import ServiceCard from "../../elements/serviceCard";

const WhoWeServeSection = () => {
  return (
    <section className="section__who pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="heading-primary text-back-element padding_bottom--20">
              Who we{" "}
              <span className="text__element">
                Serve
                <img
                  src="/img/text-elment.png"
                  className="text__element--img"
                  alt=""
                />
              </span>
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="content-wrapper">
              <p className="paragraph-secondary">
                Our data visualisation solutions are designed to benefit
                entities involved in the prevention and management of chronic
                disease, by providing them with clear and actionable insights
                into the impact of their lifestyle health programs.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card-grid">
              {whyWeServeObj?.map((cardData) => (
                <ServiceCard
                  key={cardData?.title}
                  description={cardData?.description}
                  image={cardData?.image}
                  title={cardData?.title}
                />
              ))}
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
        <img
          src="/img/hospital-img.png"
          className="img-fluid hospital__img"
          alt=""
        />
      </div>
    </section>
  );
};

export default WhoWeServeSection;
