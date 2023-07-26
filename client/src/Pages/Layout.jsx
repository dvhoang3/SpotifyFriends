import User from '../Components/User/User'
import FriendsListComponent from '../Components/Friends/FriendsListComponent'

export default function ProfilePage({accessToken, serverEndpoint}) {  
  return (
    <div className="mb-5 d-flex w-100" style={{height: "100vh", overflowY: "hidden"}}>
      <div className="w-100" style={{overflowY: "auto"}}>
        <User
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
        />
      </div>
      <FriendsListComponent />
    </div>
  )
}