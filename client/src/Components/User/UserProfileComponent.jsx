export default function UserProfileComponent({ displayName, profilePicture, userId }) {
  return (<>
    <img
      className="rounded-circle border img-fluid w-100"
      src={profilePicture}
      style={{maxWidth: "300px", height: "auto"}}
    />
    <div className="my-1 d-flex flex-column w-100">
      <h1 className="text-nowrap text-truncate w-100 text-center">{displayName}</h1>
      <h5 className="text-nowrap text-truncate w-100 text-center text-muted">{userId}</h5>
    </div>
  </>)
}