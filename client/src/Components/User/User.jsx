import { Container } from 'reactstrap'
import UserProfileComponent from './UserProfileComponent'
import UserTopTracksComponent from '../Tracks/UserTopTracksComponent'

import { useState, useEffect } from 'react'
import axios from 'axios'
import UserTopArtistsComponent from '../Artists/UserTopArtistsComponent'

export default function User({accessToken, serverEndpoint}) {
  if (!accessToken) return

  const [userId, setUserId] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  useEffect(() => {
    axios.get(`${serverEndpoint}/user/?access_token=${accessToken}`).then(data => {
      setDisplayName(data.data.displayName)
      setProfilePicture(data.data.displayPicture)
      setUserId(data.data.userId)
    })
  }, [])

  return (
    <Container className="mt-3 mb-4 d-flex flex-column align-items-center">
      <Container className="mb-2 d-flex flex-column justify-content-center align-items-center">
        <UserProfileComponent
          displayName={displayName}
          profilePicture={profilePicture}
        />
      </Container>
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 gap-lg-5">
        <UserTopTracksComponent
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
        />
        <UserTopArtistsComponent
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
        />
      </Container>
    </Container>
  )
}