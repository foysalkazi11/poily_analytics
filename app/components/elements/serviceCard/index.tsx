/* eslint-disable @next/next/no-img-element */
import WhyPolyCardType from "@/app/types/whyPloyCardType";
import React from "react";

const ServiceCard = ({ description, image, title }: WhyPolyCardType) => {
  return (
    <div className="card">
      <a href="javascript:void(0)">
        <div className="card-content">
          <div className="d-flex gap-3 align-center">
            <img src={image} className="img-fluid" alt="card_image" />
            <h3 className="card-title" tabIndex={0}>
              {title}
            </h3>
          </div>
          <p tabIndex={0}>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
