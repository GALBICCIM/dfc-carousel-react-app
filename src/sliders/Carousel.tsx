import { useMemo } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.section`
   position: relative;
`;

interface carouselProps {
   children: React.ReactNode;
   className?: string;
   autoplay?: boolean | number;
   speed?: number;
   loop?: boolean;
}

const Carousel = ({ children, className, autoplay = false, speed = 300, loop = false }: carouselProps) => {
   const settings = useMemo<Settings>(
      () => ({
         dots: false,
         infinite: loop,
         speed: speed,
         slidesToShow: 1,
         autoplay: Boolean(autoplay),
         autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay
      }),
      [autoplay, loop, speed]
   );

   return (
      <SlideWrapper className={className}>
         <Slider {...settings}>{children}</Slider>
      </SlideWrapper>
   );
};

export default Carousel;
