import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  //   appendDots: (dots:React.ReactNode) => (
  //     <div
  //       style={{
  //         backgroundColor: "#ddd",
  //         borderRadius: "10px",
  //         padding: "10px"
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: (i:number) => (
  //     <div
  //       style={{
  //         width: "30px",
  //         color: "blue",
  //         border: "1px blue solid"
  //       }}
  //     >
  //       {i + 1}
  //     </div>
  //   )
};

interface ReactSlickCarouselType {
  moreSetting?: { [key: string]: any };
  children: React.ReactNode;
}

const ReactSlickCarousel: React.FC<ReactSlickCarouselType> = ({
  moreSetting,
  children,
}) => {
  const finalSettings = { ...settings, ...moreSetting };
  return <Slider {...finalSettings}>{children}</Slider>;
};

export default ReactSlickCarousel;
