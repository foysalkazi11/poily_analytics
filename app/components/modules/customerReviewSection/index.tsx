import React from "react";
import ReactSlickCarousel from "../../elements/carousel";
import customerReviewObj from "@/app/constants/customerReviewObj";
import CustomerReviewCard from "../../elements/customerReviewCard";

const CustomerReviewSection = () => {
  return (
    <section className="section__slider">
      <div className="owl-slider">
        <div id="carousel" className="owl-carousel">
          <ReactSlickCarousel moreSetting={{ dotsClass: "sliderCustomDot" }}>
            {customerReviewObj?.map((cardData, index) => (
              <CustomerReviewCard
                key={`${cardData.name}${index}`}
                image={cardData?.image}
                name={cardData?.name}
                review={cardData.review}
              />
            ))}
          </ReactSlickCarousel>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
