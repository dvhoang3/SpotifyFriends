import { Container } from "reactstrap";

const CLIENT_ID = "e2791fe6bc404cf39077a2c1f16c9abc"
const REDIRECT_URL = "http://localhost:5173/"
const SCOPES = []

export default function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${SCOPES.join('%20')}`

  return (
    <Container className="d-flex justify-content-center">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
    </Container>
  )
}