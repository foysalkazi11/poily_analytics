/* eslint-disable @next/next/no-img-element */
import teamMemberObj from "@/app/constants/teamMemberObj";
import React from "react";
import TeamMemberCard from "../../elements/teamMemberCard";
import useWindowSize from "@/app/hooks/common/useWindowSize";
import ReactSlickCarousel from "../../elements/carousel";

const OurTeamMemberSection = () => {
  const { width } = useWindowSize();
  return (
    <section className="section__team bg-color-green-light">
      <img
        src="/img/meet_top_shape_bg.png"
        className="img-fluid team__top--img"
        alt="bg_img"
      />
      <div className="container">
        <div className="u-center-text margin-bottom-40">
          <h2 className="heading-primary text-back-element padding_bottom--20">
            Meet{" "}
            <span className="text__element">
              {" "}
              Our Team
              <img
                src="/img/text-elment.png"
                className="text__element--img"
                alt=""
              />
            </span>
          </h2>
        </div>

        {width > 600 ? (
          <div className="team_member_container">
            {teamMemberObj.map((cardData, index) => (
              <TeamMemberCard
                key={`${cardData?.name}${index}`}
                designation={cardData?.designation}
                image={cardData?.image}
                modifierClass={cardData?.modifierClass}
                name={cardData?.name}
              />
            ))}
          </div>
        ) : (
          <ReactSlickCarousel moreSetting={{ dotsClass: "sliderCustomDot" }}>
            {teamMemberObj.map((cardData, index) => (
              <TeamMemberCard
                key={`${cardData?.name}${index}`}
                designation={cardData?.designation}
                image={cardData?.image}
                modifierClass={cardData?.modifierClass}
                name={cardData?.name}
              />
            ))}
          </ReactSlickCarousel>
        )}

        {/* <div className="u-center-text">
          <div className="team_center_img">
            <img src="/img/member_1.png" alt="" />
          </div>
          <p className="team_member">Zidas Zius</p>
          <p className="member_desc">Chief Executive Officer</p>
        </div> */}
      </div>
      <img
        src="/img/meet_bottom_shape_bg.png"
        className="img-fluid team__bottom--img"
        alt=""
      />
    </section>
  );
};

export default OurTeamMemberSection;
