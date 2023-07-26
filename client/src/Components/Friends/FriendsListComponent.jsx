import { useState, useEffect } from "react";
import DisplayFriend from "./DisplayFriend";

export default function FriendsListComponent() {
  const mutuals = [
    {
      id: 1,
      name: "fake one",
      status: "none"
    },
    {
      id: 2,
      name: "fake two",
      status: "none"
    },
    {
      id: 3,
      name: "fake three",
      status: "none"
    },
    {
      id: 4,
      name: "fake four",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 1,
      name: "fake one",
      status: "none"
    },
    {
      id: 2,
      name: "fake two",
      status: "none"
    },
    {
      id: 3,
      name: "fake three",
      status: "none"
    },
    {
      id: 4,
      name: "fake four",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 1,
      name: "fake one",
      status: "none"
    },
    {
      id: 2,
      name: "fake two",
      status: "none"
    },
    {
      id: 3,
      name: "fake three",
      status: "none"
    },
    {
      id: 4,
      name: "fake four",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 1,
      name: "fake one",
      status: "none"
    },
    {
      id: 2,
      name: "fake two",
      status: "none"
    },
    {
      id: 3,
      name: "fake three",
      status: "none"
    },
    {
      id: 4,
      name: "fake four",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 1,
      name: "fake one",
      status: "none"
    },
    {
      id: 2,
      name: "fake two",
      status: "none"
    },
    {
      id: 3,
      name: "fake three",
      status: "none"
    },
    {
      id: 4,
      name: "fake four",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
    {
      id: 5,
      name: "fake five",
      status: "none"
    },
  ]

  const [windowWidth, setWindowWidth] = useState([window.innerWidth, window.innerWidth])
  const [displayTab, setDisplayTab] = useState(window.innerWidth >= 992)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth((previousWidth) => [previousWidth[1], window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth[0] >= 992 && windowWidth[1] < 992) setDisplayTab(false)
    else if (windowWidth[0] < 992 && windowWidth[1] >= 992) setDisplayTab(true)
  }, [windowWidth])

  return (
    <div className="d-flex border-start bg-light">
      <div className="border-end h-100" style={{width: "15px", cursor: "pointer"}} onClick={() => setDisplayTab(!displayTab)}></div>
      <div className={displayTab ? "" : "d-none"}>
        <div className="p-2 d-flex flex-column" style={{width: "250px", overflowY: "auto"}}>
          <div className="">Mutuals</div>
          <div className="d-flex flex-column">
            {mutuals.map(mutual => {
              return <DisplayFriend />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}