import { Container } from 'reactstrap'
import DisplayTracks from "../General/DisplayTracks";

export default function UserTopTracksComponent({ tracks }) {
  return (
    <Container className="d-flex flex-column align-items-center">
      <div>Top Tracks</div>
      <DisplayTracks
        tracks={tracks}
      />
    </Container>
  )
}