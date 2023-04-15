import React from "react";
import MainContainer from "../../layouts/container";
import MainHeroSection from "../../modules/heroSection";
import WhyPloySection from "../../modules/whyPloy";
import WhoWeServeSection from "../../modules/whoWeServeSection";
import OurServicesSection from "../../modules/ourServicesSection";
import OurWorkSection from "../../modules/ourWorkSection";
import OurBenefitsSection from "../../modules/ourBenefitsSection";
import CustomerReviewSection from "../../modules/customerReviewSection";
import OurTeamMemberSection from "../../modules/ourTeamMemberSection";

const HomePageContent = () => {
  return (
    <>
      <MainHeroSection />
      <WhyPloySection />
      <WhoWeServeSection />
      <OurServicesSection />
      <OurWorkSection />
      <OurBenefitsSection />
      <CustomerReviewSection />
      <OurTeamMemberSection />
    </>
  );
};

export default HomePageContent;
