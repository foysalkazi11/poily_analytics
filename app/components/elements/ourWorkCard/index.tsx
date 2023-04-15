/* eslint-disable @next/next/no-img-element */
import OurWorkCardType from "@/app/types/ourWorkCardType";
import React from "react";

const OurWorkCard = ({ image, link, title }: OurWorkCardType) => {
  return (
    <div className="col-lg-3">
      <div className="work__card">
        <div className="work__card--img">
          <img src={image} className="img-fluid" alt="card_image" />
        </div>
        <a href={link || "#"} target="_blank" className="work__card--title">
          {title}
        </a>
      </div>
    </div>
  );
};

export default OurWorkCard;
