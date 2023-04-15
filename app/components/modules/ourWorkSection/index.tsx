import ourWorkObj from "@/app/constants/ourWorkObj";
import React from "react";
import OurWorkCard from "../../elements/ourWorkCard";

const OurWorkSection = () => {
  return (
    <section className="section__work">
      <div className="container">
        <div className="u-center-text margin-bottom-40">
          <h2 className="heading-primary text-back-element">
            Our <span className="text__element">Work</span>
          </h2>
        </div>
        <div className="row">
          {ourWorkObj?.map((cardData) => (
            <OurWorkCard
              key={cardData?.title}
              image={cardData?.image}
              link={cardData?.link}
              title={cardData?.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
