import { useContext } from 'react'

import { ContentComponent, DataItem } from "./styles"
// import { ContentProps } from "./types"
import { MainCardContext } from "../MainCard/MainCard"
import Button from '../../../../..//components/Button/Button';

function Content() {
  // 3 шаг. Вызываем хук useContext, в который мы передаём контекст, который был создан на 1-м шаге
  // При вызове хука useContext он вернёт те данные, которые были переданы в value провайдера на 2-м шаге
  // Сохраняем значение в отдельную переменную
  // const userContentData = useContext(MainCardContext);
  const { data, onDataChange } = useContext(MainCardContext)
  // console.log(contextData);

  const onDeleteData = () => {
    onDataChange(undefined)
  }

  return (
    <ContentComponent>
      <DataItem>First Name: {data ? data?.firstName : '-'}</DataItem>
      <DataItem>Last Name: {data ? data?.lastName : '-'}</DataItem>
      <DataItem>Age: {data ? data?.age : '-'}</DataItem>
      <Button name='CLEAR DATA' onClick={onDeleteData} />
    </ContentComponent>
  )
}

export default Content

//Пример с props drilling
// function Content({contentData}: ContentProps) {

//   return (
//     <ContentComponent>
//       <DataItem>First Name: {contentData.firstName}</DataItem>
//       <DataItem>Last Name: {contentData.lastName}</DataItem>
//       <DataItem>Age: {contentData.age}</DataItem>
//     </ContentComponent>
//   )
// }

// export default Content