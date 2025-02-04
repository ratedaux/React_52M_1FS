import Apple from "./components/Apple/Apple"
import { ClientPage } from "./styles"
import { Link } from "react-router";

function Clients() {
  return <ClientPage>
    Content Сlients page
<Link to="/apple">Apple</Link>;

<Link
  to={{
    pathname: "clients/apple",
    search: "?query=string",
    hash: "#hash",
  }}
/>

<Link to="/huawei">Huawei</Link>;

<Link
  to={{
    pathname: "clients/huawei",
    search: "?query=string",
    hash: "#hash",
  }}
/>

<Link to="/nokia">Nokia</Link>;

<Link
  to={{
    pathname: "clients/nokia",
    search: "?query=string",
    hash: "#hash",
  }}
/>
    </ClientPage>
}

export default Clients