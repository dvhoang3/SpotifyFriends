import { Card, Container } from 'reactstrap'

export default function DisplayTrack({ trackImg, trackName, trackArtist }) {
  return (
    <Container>
      <Card>
        <Container className="my-2 d-flex gap-3">
          <img src={trackImg} style={{width: "64px", height: "64px", borderRadius: "10%"}}/>
          <div className="d-flex flex-column justify-content-center text-truncate">
            <div className="">{trackName}</div>
            <div className="text-muted">{trackArtist}</div>
          </div>
        </Container>
      </Card>
    </Container>
  )
}