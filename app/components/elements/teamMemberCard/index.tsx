/* eslint-disable @next/next/no-img-element */
import OurTeamCardType from "@/app/types/ourTeamCardType";
import React from "react";

const TeamMemberCard = ({
  designation,
  image,
  modifierClass,
  name,
}: OurTeamCardType) => {
  return (
    <div
      className={`${modifierClass} d-flex align-center justify-center flex-direction-col`}
    >
      <img src={image} alt="team_member_img" className="team__img" />

      <p className="team_member">{name}</p>
      <p className="member_desc">{designation}</p>
    </div>
  );
};

export default TeamMemberCard;
