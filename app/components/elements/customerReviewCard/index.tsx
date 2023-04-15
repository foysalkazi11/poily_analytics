/* eslint-disable @next/next/no-img-element */
import CustomerReviewCardType from "@/app/types/customerFeedbackCardType";
import React from "react";

const CustomerReviewCard = ({
  image,
  name,
  review,
}: CustomerReviewCardType) => {
  return (
    <div className="item">
      <div className="review_wrap u-center-text">
        <div className="review__img margin-bottom-20">
          <img src={image} className="img-fluid " alt="customer_img" />
        </div>
        <p className="review__name">{name}</p>
        <p className="review__description">{review}</p>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
