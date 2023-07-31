import User from '../Components/User/User'
import FriendsListComponent from '../Components/Friends/FriendsListComponent'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProfilePage({accessToken, serverEndpoint}) {  
  if (!accessToken) return

  const [userId, setUserId] = useState('')

  useEffect(() => {
    axios.get(`${serverEndpoint}/user/?access_token=${accessToken}`).then(data => {
      setUserId(data.data.userId)
    })
  }, [])

  return (
    <div className="d-flex w-100" style={{height: "100vh", overflowY: "hidden"}}>
      <div className="w-100" style={{overflowY: "auto"}}>
        <User
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
          userId={userId}
        />
      </div>
      <FriendsListComponent />
    </div>
  )
}