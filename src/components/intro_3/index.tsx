import { Link } from "react-router-dom";
import * as Style from "./styled";

const IntroThird = () => {
   return (
      <Style.Container>
         <Style.Text size={27} color="#AFBAD0" font="KBOBold" style={{ marginBottom: "40px" }}>
            우리 포렌식은_
         </Style.Text>
         <div style={{ marginBottom: "35px" }}>
            <Style.Text size={14} color="#7C7D85" font="KBOBold" style={{ marginBottom: "10px" }}>
               코딩을 전혀 몰라도 OK!
            </Style.Text>

            <Style.Text size={18} color="white" font="KBOBold">
               <Style.Span size={18} color="#AFBAD0" font="KBOBold">
                  프로그래밍 기초 언어
               </Style.Span>
               부터
            </Style.Text>
            <Style.Text size={18} color="white" font="KBOBold">
               멘토 / 멘티와 함께하는 웹 개발 프로젝트
            </Style.Text>
            <Style.Text size={18} color="white" font="KBOBold">
               <Style.Span size={18} color="#AFBAD0" font="KBOBold">
                  보안
               </Style.Span>{" "}
               분야, 다양한 외부 행사 등
            </Style.Text>
         </div>
         <div style={{ marginBottom: "30px" }}>
            <Style.Text size={18} color="white" font="KBOBold">
               <Style.Span size={18} color="#AFBAD0" font="KBOBold">
                  개발
               </Style.Span>
               을 중점으로
            </Style.Text>
            <Style.Text size={18} color="white" font="KBOBold">
               다양한 분야를 배워볼 수 있는 전공 동아리
            </Style.Text>
         </div>

         <Style.Text size={12} color="#CACACA" font="KBOMedium" style={{ marginBottom: "20px" }}>
            이런 친구가 신청하면 좋아요
         </Style.Text>

         <div style={{ marginBottom: "60px" }}>
            <Style.Text size={13} color="#CACACA" font="KBOMedium" style={{ marginBottom: "8px" }}>
               ! 학교 수업시간 전 미리 프로그래밍 공부를 해보고 싶은 학생
            </Style.Text>
            <Style.Text size={13} color="#CACACA" font="KBOMedium" style={{ marginBottom: "8px" }}>
               ! 포트폴리오 기록을 남기고 싶은 학생
            </Style.Text>
            <Style.Text size={13} color="#CACACA" font="KBOMedium" style={{ marginBottom: "8px" }}>
               ! 개발 쪽에 관심이 있는 학생
            </Style.Text>
            <Style.Text size={13} color="#CACACA" font="KBOMedium" style={{ marginBottom: "8px" }}>
               ! 선배들과 친목도모를 하며 즐거운 분위기에서 동아리 활동을 하고 싶은 학생
            </Style.Text>
         </div>

         <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Link to="https://forms.gle/g6sGPwrsvj6WVr6x5">
               <Style.Button>지원하기</Style.Button>
            </Link>
         </div>
      </Style.Container>
   );
};

export default IntroThird;
