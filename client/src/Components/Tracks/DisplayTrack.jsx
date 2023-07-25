import { Card, Container } from 'reactstrap'

export default function DisplayTrack({ trackImg, trackName, trackArtist }) {
  return (
    <Container>
      <Card className="bg-light">
        <Container className="my-2 d-flex gap-3">
          <img className="rounded" src={trackImg} style={{width: "64px", height: "64px"}}/>
          <div className="d-flex flex-column justify-content-center text-truncate">
            <div className="">{trackName}</div>
            <div className="text-muted" style={{fontSize: "0.9em"}}>{trackArtist}</div>
          </div>
        </Container>
      </Card>
    </Container>
  )
}