import User from '../Components/User/User'
import FriendsListComponent from '../Components/Friends/FriendsListComponent'

export default function ProfilePage({accessToken, serverEndpoint}) {
  return (
    <div className="d-flex w-100" style={{height: "100vh", overflowY: "hidden"}}>
      <div className="p-0 w-100" style={{overflowY: "auto"}}>
        <User
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
        />
      </div>
      <FriendsListComponent />
    </div>
  )
}