import * as Style from "./styled";

const IntroFirst = () => {
   return (
      <Style.Container>
         <Style.Text font="KBOBold" size={120} color="white" style={{ margin: 0 }}>
            DFC
         </Style.Text>
         <Style.Hr />
         <Style.Text font="KBOLight" size={16} color="white" style={{ margin: 0, marginBottom: "160px" }}>
            Digital Forensic Club
         </Style.Text>
      </Style.Container>
   );
};

export default IntroFirst;
