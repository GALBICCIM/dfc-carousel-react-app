import styled from "styled-components";

interface TextType {
   font: string;
   size: number;
   color?: string;
}

export const Hr = styled.hr`
   @media screen and (min-width: 360px) {
      width: 300px;
   }

   @media screen and (min-width: 1024px) {
      width: 550px;
   }
`;

export const Container = styled.div`
   height: 98vh;
   width: 100%;
   background-color: #151825;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Text = styled.p<TextType>`
   font-family: ${(props) => props.font};
   font-size: ${(props) => props.size}px;
   color: ${(props) => props.color};
`;
