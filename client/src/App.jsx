import Login from "./Components/Authentication/Login";
import ProfilePage from "./Pages/Layout"

import useAuth from "./Components/Authentication/useAuth";

const SERVER = 'http://localhost'
const PORT = 3001
const SERVER_ENDPOINT = `${SERVER}:${PORT}`

const code = new URLSearchParams(window.location.search).get('code')

export default function App() {
  const accessToken = useAuth(code, SERVER_ENDPOINT)

  return (
    <div style={{fontFamily: 'Impact, fantasy'}}>
      {localStorage.getItem("refreshToken") ? <ProfilePage accessToken={accessToken} serverEndpoint={SERVER_ENDPOINT}/> : <Login />}
    </div>
  )
}

