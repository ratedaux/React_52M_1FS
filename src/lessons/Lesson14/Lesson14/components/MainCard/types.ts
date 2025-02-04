import { Dispatch, SetStateAction } from "react"

export interface UserData {
  firstName: string,
  lastName: string,
  age: number
}

export interface MainCardContextType {
  data: UserData | undefined,
  onDataChange: Dispatch<SetStateAction<UserData | undefined>> | (() => void)
}