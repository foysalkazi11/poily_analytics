/* eslint-disable @next/next/no-img-element */
import OurBenefitsObj from "@/app/constants/ourBenefitsObj";
import React from "react";
import OurBenefitsCard from "../../elements/ourBenefitsCard";

const OurBenefitsSection = () => {
  return (
    <section className="section__benefit bg-color-yellow-light">
      <img
        src="/img/top_shape_bg.png"
        className="img-fluid benefit__top--img"
        alt="top_shape_bg"
      />
      <div className="container">
        <div className="u-center-text margin-bottom-40">
          <h2 className="heading-primary text-back-element padding_bottom--20">
            Our{" "}
            <span className="text__element">
              Benefits
              <img
                src="/img/text-elment.png"
                className="text__element--img"
                alt="text_element"
              />
            </span>
          </h2>
        </div>

        <div className="row">
          {OurBenefitsObj?.map((cardData) => (
            <OurBenefitsCard
              key={cardData?.titlePortionOne}
              description={cardData?.description}
              image={cardData?.image}
              titlePortionOne={cardData?.titlePortionOne}
              titlePortionTwo={cardData?.titlePortionTwo}
            />
          ))}
        </div>
      </div>
      <img
        src="/img/bottom_shape_bg.png"
        className="img-fluid benefit__bottom--img"
        alt="bottom_shape_bg"
      />
    </section>
  );
};

export default OurBenefitsSection;
