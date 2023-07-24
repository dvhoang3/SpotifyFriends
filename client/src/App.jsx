import { Container } from "reactstrap";
import User from "./Components/User/User";
import Login from "./Components/Authentication/Login";

export default function App() {
  
  return (
    <Container style={{fontFamily: 'Impact, fantasy'}}>
      {/* <User /> */}
      <Login />
    </Container>
  )
}

