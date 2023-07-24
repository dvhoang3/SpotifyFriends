import { Container } from 'reactstrap'
import UserProfileComponent from './UserProfileComponent'
import UserTopTracksComponent from './UserTopTracksComponent'

import { useState, useEffect } from 'react'

import { fakeData } from "../../../../server/fakeData"

export default function User() {
  const [givenName, setGivenName] = useState('')
  const [surName, setsurName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [topTracks, setTopTracks] = useState([])

  useEffect(() => {
    const data = fakeData;

    setGivenName(data.given_name)
    setsurName(data.surname)
    setProfilePicture(data.profile_picture)
    setTopTracks(data.top_tracks)
  }, [])

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <UserProfileComponent
        givenName={givenName}
        surName={surName}
        profilePicture={profilePicture}
      />
      <Container className="d-flex">
        <UserTopTracksComponent
          tracks={topTracks}
        />
      </Container>
    </Container>
  )
}