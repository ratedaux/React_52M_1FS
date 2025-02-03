import { ReactNode } from "react";
import { ToolbarStyled } from "./styles";

interface ToolbarProps {
	children: ReactNode;
}

function Toolbar({ children }: ToolbarProps) {
	return <ToolbarStyled>{children}</ToolbarStyled>;
}

export default Toolbar;