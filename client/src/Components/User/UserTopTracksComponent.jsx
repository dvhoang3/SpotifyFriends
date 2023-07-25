import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import DisplayTracks from "../General/DisplayTracks"

import axios from 'axios'

export default function UserTopTracksComponent({ accessToken, serverEndpoint, userId }) {
  const [shortTermTops, setShortTermTops] = useState([])
  const [medTermTops, setMedTermTops] = useState([])
  const [longTermTops, setLongTermTops] = useState([])

  useEffect(() => {
    axios.get(`${serverEndpoint}/top_tracks/short_term/?access_token=${accessToken}`).then(data => {
      console.log(data.data.tracks)
    })
  }, [])

  return (
    <Container className="d-flex flex-column align-items-center">
      <div>Top Tracks</div>
      {/* <DisplayTracks
        tracks={topTracks}
      /> */}
    </Container>
  )
}