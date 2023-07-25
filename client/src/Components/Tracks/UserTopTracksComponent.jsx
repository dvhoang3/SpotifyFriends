import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import DisplayTrack from "./DisplayTrack"

import axios from 'axios'

export default function UserTopTracksComponent({ accessToken, serverEndpoint, userId }) {
  const [shortTermTops, setShortTermTops] = useState([])
  const [medTermTops, setMedTermTops] = useState([])
  const [longTermTops, setLongTermTops] = useState([])

  useEffect(() => {
    axios.get(`${serverEndpoint}/top_tracks/short_term/?access_token=${accessToken}`).then(data => {
      setShortTermTops(data.data.tracks)
      console.log(data.data.tracks)
    })
  }, [])

  return (
    <Container className="d-flex flex-column align-items-center border p-1" style={{width: "400px", maxHeight: "60vh", minWidth: "250px"}}>
      <div>Top Tracks</div>
      <div className="d-flex flex-column w-100 gap-1 m-1" style={{overflowY: "auto", overflowX: "hidden"}}>
        {shortTermTops.map(track => {
          return <DisplayTrack
            key={track.trackId}
            trackImg={track.trackPicture}
            trackName={track.trackName}
            trackArtist={track.trackArtist}
          />
        })}
      </div>
    </Container>
  )
}