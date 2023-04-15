import React, { FC } from "react";
import MainNavigation from "../navigation";
import MainFooter from "../../modules/footer";

const MainContainer: FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <MainNavigation />
      {props?.children}
      <MainFooter />
    </>
  );
};

export default MainContainer;
