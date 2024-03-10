import * as Style from "./styled";

const IntroSeconds = () => {
   return (
      <Style.Container style={{ marginLeft: "20px" }}>
         <Style.Text size={22} color="#AFBAD0" font="KBOBold">
            보안과 개발에
         </Style.Text>
         <Style.Text size={22} color="#AFBAD0" font="KBOBold">
            관심있는 학생들이 모여
         </Style.Text>
         <Style.Text size={22} color="#AFBAD0" font="KBOBold">
            함께 토론하고 연구하는
         </Style.Text>
         <Style.Text size={22} color="#AFBAD0" font="KBOBold" style={{ marginBottom: "120px" }}>
            동아리,{" "}
            <Style.Span font="KBOBold" size={43} color="white">
               포렌식
            </Style.Span>
         </Style.Text>
      </Style.Container>
   );
};

export default IntroSeconds;
