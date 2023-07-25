import { Container, Button } from "reactstrap";

const CLIENT_ID = "e2791fe6bc404cf39077a2c1f16c9abc"
const REDIRECT_URL = "http://localhost:5173/"
const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-top-read'
]

export default function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${SCOPES.join('%20')}`

  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <a className="" href={AUTH_URL}>
        <Button className="btn-success btn-lg">
          Login with Spotify
        </Button>
      </a>
    </Container>
  )
}