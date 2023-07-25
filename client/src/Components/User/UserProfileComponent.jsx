export default function UserProfileComponent({ displayName, profilePicture, userId }) {
  return (<>
    <img
      className="rounded-circle border"
      src={profilePicture}
      width={"300px"}
      height={"300px"}
    />
    <div className="my-1 d-flex flex-column align-items-center">
      <div style={{fontSize: "2em"}}>{displayName}</div>
      <div className="text-muted" style={{fontSize: "1.1em"}}>{userId}</div>
    </div>
  </>)
}