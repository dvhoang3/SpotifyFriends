import { Container } from "reactstrap";

import Login from "./Components/Authentication/Login";
import User from "./Components/User/User"

import useAuth from "./Components/Authentication/useAuth";

const SERVER = 'http://localhost'
const PORT = 3001
const SERVER_ENDPOINT = `${SERVER}:${PORT}`

const code = new URLSearchParams(window.location.search).get('code')

export default function App() {
  const accessToken = useAuth(code, SERVER_ENDPOINT)

  return (
    <Container style={{fontFamily: 'Impact, fantasy', height: "100vh"}}>
      {localStorage.getItem("refreshToken") ? <User accessToken={accessToken} serverEndpoint={SERVER_ENDPOINT}/> : <Login />}
    </Container>
  )
}

