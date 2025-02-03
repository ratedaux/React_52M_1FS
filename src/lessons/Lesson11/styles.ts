import styled from "@emotion/styled";

export const Lesson11Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 20px;
	max-width: 450px;
	margin: auto;
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	max-height: 700px;
	overflow: auto;
`;

export const ListItem = styled.div`
	border: 2px solid var(--secondary-color);
	border-radius: var(--border-radius);
	padding: 15px 25px;
`;