/* eslint-disable @next/next/no-img-element */
import OurBenefitsCardType from "@/app/types/ourBenefitsCardType";
import React from "react";

const OurBenefitsCard = ({
  image,
  description,
  titlePortionOne,
  titlePortionTwo,
}: OurBenefitsCardType) => {
  return (
    <div className="col-lg-3">
      <div className="benefit__card">
        <div className="benefit__card--img margin-bottom-20">
          <img src={image} className="img-fluid" alt="benefits_card" />
        </div>
        <h3 className="benefit__card--title">
          {titlePortionOne} <br />
          {titlePortionTwo}
        </h3>
        <img
          src="/img/border.png"
          className="img-fluid benefit__border--img"
          alt="border_img"
        />
        <p className="benefit__card--description">{description}</p>
      </div>
    </div>
  );
};

export default OurBenefitsCard;
