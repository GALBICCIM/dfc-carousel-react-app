import styled from "styled-components";

interface TextType {
	font: string;
	size: number;
	color?: string;
}

export const Container = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #151825;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: center;
	}
`;

export const Text = styled.p<TextType>`
	font-family: ${(props) => props.font};
	font-size: ${(props) => props.size}px;
	color: ${(props) => props.color};
	margin: 5px 5px;
`;

export const Span = styled.span<TextType>`
	font-family: ${(props) => props.font};
	font-size: ${(props) => props.size}px;
	color: ${(props) => props.color};
`;
