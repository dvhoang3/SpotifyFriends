import { Container } from 'reactstrap'
import UserProfileComponent from './UserProfileComponent'
import UserTopTracksComponent from '../Tracks/UserTopTracksComponent'

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
    <Container className="mt-5 d-flex flex-column align-items-center">
      <UserProfileComponent
        displayName={displayName}
        profilePicture={profilePicture}
      />
      <Container className="d-flex">
        <UserTopTracksComponent
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
          userId={userId}
        />
        {/* <UserTopTracksComponent
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
          userId={userId}
        /> */}
      </Container>
    </Container>
  )
}