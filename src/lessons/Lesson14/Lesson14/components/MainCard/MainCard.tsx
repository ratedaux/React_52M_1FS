import { useState, createContext } from "react"

import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { MainCardContextType, UserData } from "./types"

//Шаг 1. Создаём хранилище - контекст, с помощью функции createContext
// необходимо сделать импорт, чтобы затем использовать для создания
// export const MainCardContext = createContext<undefined | UserData>(undefined)
export const MainCardContext = createContext<MainCardContextType>({
  data: undefined,
  onDataChange: () => { }
})




function MainCard() {
  const [userData, setUserData] = useState<UserData|undefined>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    // 2 шаг. Создаём обертку, которая позволит получить значение из контекста
    // в любом компоненте, который будет вложен в компонент с оберткой (внук, правнук и т.д.)
    // В провайдере мы добавляем значение, к которому и необходим доступ (userData)
    // <MainCardContext.Provider value={userData}>
    <MainCardContext.Provider value={
      {
        data: userData,
        onDataChange: setUserData
      }
    }>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Пример с props drilling */}
        {/* <Section data={userData}/> */}
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  )
}

export default MainCard