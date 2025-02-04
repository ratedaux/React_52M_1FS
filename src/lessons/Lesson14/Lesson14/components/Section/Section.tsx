import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"
// import { SectionProps } from "./types"

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionWrapper>
  )
}

export default Section

//Пример с props drilling
// function Section({ data }: SectionProps) {
//   return (
//     <SectionWrapper>
//       <SectionTitle>Section Block</SectionTitle>
//       <Content contentData={data}/>
//     </SectionWrapper>
//   )
// }


// export default Section