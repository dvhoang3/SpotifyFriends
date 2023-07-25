import { Card, Container } from 'reactstrap'

export default function DisplayArtist({ artistImg, artistName, artistGenres }) {
  return (
    <Container>
      <Card className="bg-light">
        <Container className="my-2 d-flex gap-3">
          <img className="rounded" src={artistImg} style={{width: "64px", height: "64px"}}/>
          <div className="d-flex flex-column justify-content-center text-truncate">
            <div className="">{artistName}</div>
            <div className="text-muted" style={{fontSize: "0.9em"}}>{artistGenres.join(', ')}</div>
          </div>
        </Container>
      </Card>
    </Container>
  )
}