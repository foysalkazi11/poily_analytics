/* eslint-disable @next/next/no-img-element */
import ourServicesObj from "@/app/constants/ourServicesObj";
import React from "react";
import ServiceCard from "../../elements/serviceCard";

const OurServicesSection = () => {
  return (
    <section className="section__service pt-0">
      <img
        src="/img/Our_Services.png"
        className="img-fluid our__service--img"
        alt="card_image"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <h2 className="heading-primary text-back-element padding_bottom--20">
              {" "}
              Our{" "}
              <span className="text__element">
                Services
                <img
                  src="/img/text-elment.png"
                  className="text__element--img"
                  alt="card_image"
                />
              </span>
            </h2>

            <div className="content-wrapper margin-bottom-40">
              <p className="paragraph-secondary">
                We are committed to helping you communicate the impact of your
                lifestyle health programs clearly and effectively using the best
                tools and technology.
              </p>
            </div>
            <div className="card-grid">
              {ourServicesObj?.map((cardData) => (
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
      </div>
    </section>
  );
};

export default OurServicesSection;
