import DisplayFriend from "./DisplayFriend"
import useWindowWidth from "../Utility/useWindowWidth"

export default function FriendsListComponent() {
  const {displayTab, setDisplayTab} = useWindowWidth(992)

  return (
    <div className="d-flex border-start bg-light">
      <div className="border-end h-100 d-flex align-items-center justify-content-center" style={{width: "15px", cursor: "pointer"}} onClick={() => setDisplayTab(!displayTab)}>
        <div className="">||</div>
      </div>
      <div className={displayTab ? "" : "d-none"}>
        <div className="p-2 d-flex flex-column" style={{width: "250px", overflowY: "auto"}}>
          <div className="">Mutuals</div>
          {/* <div className="d-flex flex-column">
            {mutuals.map(mutual => {
              return <DisplayFriend />
            })}
          </div> */}
        </div>
      </div>
    </div>
  )
}