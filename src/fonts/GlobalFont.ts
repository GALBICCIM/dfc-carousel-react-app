import { createGlobalStyle } from "styled-components";
import KBOBold from "./KBOBold.woff";
import KBOMedium from "./KBOMedium.woff";
import KBOLight from "./KBOLight.woff";

const GlobalFont = createGlobalStyle`
   @font-face {
      font-family: "KBOBold";
      src: local("KBOBold"), url(${KBOBold}) format("woff");
      font-weight: bold;
   }
   @font-face {
      font-family: "KBOMedium";
      src: local("KBOMedium"), url(${KBOMedium}) format("woff");
      font-weight: normal;
   }
   @font-face {
      font-family: "KBOLight";
      src: local("KBOLight"), url(${KBOLight}) format("woff");
      font-weight: lighter;
   }
`;

export default GlobalFont;
