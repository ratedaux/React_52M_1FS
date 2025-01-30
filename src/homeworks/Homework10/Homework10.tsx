import Input from "../../components/Input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { DogImg, ErrorMessage, Homework10Wrapper, InputsWrapper } from "./styles";
import axios from "axios";

function Homework10(){
  const [search, setSearch] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [dogImgUrl, setDogImgUrl] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

 const getDogPhoto = async () => {
    setDogImgUrl('')
    setError('')
    setIsLoading(true)

    try {
      const result = await axios.get(DOG_URL)
      setDogImgUrl(result.data.message)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (search) {
      getDogPhoto()
    }
  }, [search])

  return (
    <Homework10Wrapper>
      <InputsWrapper>
        <Input
          name='search'
          placeholder="Enter value"
          value={search}
          onChange={onSearchChange}
        />
        <Input
          name='note'
          placeholder="Enter note"
          value={note}
          onChange={onNoteChange}
        />
      </InputsWrapper>
      {dogImgUrl && <DogImg src={dogImgUrl} alt='Random dog img' />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Spinner />}
    </Homework10Wrapper>
  )
}

export default Homework10
