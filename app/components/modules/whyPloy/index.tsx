/* eslint-disable @next/next/no-img-element */
import whyPloyObj from "@/app/constants/whyPolyObj";
import React from "react";
import WhyPolyCard from "../../elements/whyPolyCard";

const WhyPloySection = () => {
  return (
    <section className="section_why">
      <div className="container">
        <div className="u-center-text margin-bottom-40">
          <h2 className="heading-primary text-back-element padding_bottom--20">
            Why{" "}
            <span className="text__element">
              POILY
              <img
                src="img/text-elment.png"
                className="text__element--img"
                alt=""
              />
            </span>
          </h2>
          <p className="paragraph-primary">
            We help you present the best version of your program to stakeholders{" "}
          </p>
        </div>
        <div className="row ">
          {whyPloyObj?.map((cardData) => (
            <WhyPolyCard
              key={cardData.title}
              description={cardData.description}
              image={cardData.image}
              modifierClass={cardData.modifierClass}
              title={cardData.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPloySection;
