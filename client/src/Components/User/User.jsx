import UserProfileComponent from './UserProfileComponent'
import UserTopTracksComponent from '../Tracks/UserTopTracksComponent'
import UserTopArtistsComponent from '../Artists/UserTopArtistsComponent'

import { Container } from 'reactstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
      <Container className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-md-3" style={{maxWidth: "50%"}}>
        <UserProfileComponent
          displayName={displayName}
          profilePicture={profilePicture}
          userId={userId}
        />
      </Container>
      <hr className="my-4 w-100" />
      <Container className="d-flex flex-column align-items-center flex-md-row align-items-md-start justify-content-center gap-3">
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