export default function UserProfileComponent({ displayName, profilePicture }) {
  return (<>
    <img
      src={profilePicture}
      width={"300px"}
      height={"300px"}
      style={{borderRadius: "50%"}}
    />
    <div className="m-3" style={{fontSize: "2em"}}>
      <span>{displayName}</span>
    </div>
  </>)
}