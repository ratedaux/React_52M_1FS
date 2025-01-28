import Button from "../../components/Button/Button";
import { Homework08Wrapper } from "./styles";

function Homework08() {
  return (
    <Homework08Wrapper>
      <Button name='Button' type={"button"} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Button name='Button' disabled />
    </Homework08Wrapper>
  )
}

export default Homework08;