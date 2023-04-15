/* eslint-disable @next/next/no-img-element */
import WhyPolyCardType from "@/app/types/whyPloyCardType";
import React from "react";

const WhyPolyCard = ({
  description,
  image,
  title,
  modifierClass,
}: WhyPolyCardType) => {
  return (
    <div className="col-lg-3">
      <div className={`why__card ${modifierClass}`}>
        <div className="why__card--img margin-bottom-24">
          <img src={image} className="img-fluid" alt="card_image" />
        </div>
        <h3 className="why__card--title">{title}</h3>
        <p className="why__card--description">{description}</p>
      </div>
    </div>
  );
};

export default WhyPolyCard;
