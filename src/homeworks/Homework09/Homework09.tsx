import { ChangeEvent, useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  FormWrapper,
  Homework09Wrapper,
  ResultBlock,
  ResultWrapper
} from "./styles";

function Homework09() {
  const [firstNote, setFirstNote] = useState<string>('')
  const [secondNote, setSecondNote] = useState<string>('')
  const [isShowResult, setIsShowResult] = useState<boolean>(false)
  //добавляем два дополнительных состояния для хранения значений, которые должны отображаться 
  // в момент появления блока
  const [firstResult, setFirstResult] = useState<string>('')
  const [secondResult, setSecondResult] = useState<string>('')

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value)
  }

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value)
  }

  const showResult = () => {
    //в момент нажатия на кнопку, для отображения результатов, мы забираем значения из input-ов
    //и сохраняем их в firstResult и secondResult
    setFirstResult(firstNote)
    setSecondResult(secondNote)

    // setIsShowResult(true)
    setIsShowResult(!isShowResult)
  }

  return (
    <Homework09Wrapper>
      <FormWrapper>
        <Input
          name='first-note'
          placeholder="Enter first note"
          value={firstNote}
          onChange={firstNoteOnChange}
        />
        <Input
          name='second-note'
          placeholder="Enter second note"
          value={secondNote}
          onChange={secondNoteOnChange}
        />
        <Button name='SHOW/HIDE' onClick={showResult} disabled={!firstNote.trim() && !secondNote.trim()} />
      </FormWrapper>
      {isShowResult && <ResultWrapper>
        {/* <ResultBlock>{firstNote}</ResultBlock>
        <ResultBlock>{secondNote}</ResultBlock> */}
        {firstResult && <ResultBlock>{firstResult}</ResultBlock>}
        {secondResult && <ResultBlock>{secondResult}</ResultBlock>}
      </ResultWrapper>}
    </Homework09Wrapper>
  )
}

export default Homework09