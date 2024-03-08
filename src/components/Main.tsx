import Carousel from "../sliders/Carousel";
import IntroFirst from "./intro_1";
import IntroSeconds from "./intro_2";
import IntroThird from "./intro_3";

const Main = () => {
   return (
      <Carousel>
         <IntroFirst></IntroFirst>
         <IntroSeconds></IntroSeconds>
         <IntroThird></IntroThird>
      </Carousel>
   );
};

export default Main;
