export default function UserProfileComponent({ displayName, profilePicture }) {
  return (<>
    <img
      className="rounded-circle border"
      src={profilePicture}
      width={"300px"}
      height={"300px"}
    />
    <div className="my-1" style={{fontSize: "2em"}}>
      <span>{displayName}</span>
    </div>
  </>)
}