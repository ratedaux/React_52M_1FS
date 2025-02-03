import Button from "../../components/Button/Button"
import { Title, UsersPage } from "./styles"

function Users() {

  return (
    <UsersPage>
      <Title>Select user</Title>
      <Button name="Go to About Page" onClick={()=>{}} />
    </UsersPage>
  )
}

export default Users