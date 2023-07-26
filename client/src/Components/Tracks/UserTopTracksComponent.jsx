import DisplayTrack from "./DisplayTrack"
import useWindowWidth from '../Utility/useWindowWidth'

import { useEffect, useState } from 'react'
import { Nav, NavItem, TabContent, TabPane } from 'reactstrap'
import axios from 'axios'

export default function UserTopTracksComponent({ accessToken, serverEndpoint }) {
  const [activeTab, setActiveTab] = useState(1)

  const [shortTermTops, setShortTermTops] = useState([])
  const [medTermTops, setMedTermTops] = useState([])
  const [longTermTops, setLongTermTops] = useState([])

  const {displayTab, setDisplayTab} = useWindowWidth(768)

  useEffect(() => {
    axios.get(`${serverEndpoint}/top_tracks/short_term/?access_token=${accessToken}`).then(data => {
      setShortTermTops(data.data.tracks)
    })
    axios.get(`${serverEndpoint}/top_tracks/medium_term/?access_token=${accessToken}`).then(data => {
      setMedTermTops(data.data.tracks)
    })
    axios.get(`${serverEndpoint}/top_tracks/long_term/?access_token=${accessToken}`).then(data => {
      setLongTermTops(data.data.tracks)
    })
  }, [])

  return (
    <div className="d-flex flex-column align-items-center" style={{width: "400px", minWidth: "330px"}}>
      <h5 className={`m-0 w-100 text-center ${displayTab ? "border-top border-start border-end" : "border"}`} style={{cursor: "pointer"}} onClick={() => setDisplayTab(!displayTab)}>Top Tracks</h5>
      <div className={`w-100 border-bottom border-start border-end ${displayTab ? "" : "d-none"}`}>
        <Nav tabs justified className="my-1 border-bottom-0">
          <NavItem className={activeTab === 1 ? "py-1 border-top border-end" : "py-1 border-bottom"} onClick={() => setActiveTab(1)}>
            This Month
          </NavItem>
          <NavItem className={activeTab === 2 ? "py-1 border-top border-start border-end" : "py-1 border-bottom"} onClick={() => setActiveTab(2)}>
            Last 6 Months
          </NavItem>
          <NavItem className={activeTab === 3 ? "py-1 border-top border-start" : "py-1 border-bottom"} onClick={() => setActiveTab(3)}>
            Last Few Years
          </NavItem>
        </Nav>
        <TabContent className="w-100" style={{maxHeight: "50vh", overflowY: "auto", overflowX: "hidden"}} activeTab={activeTab}>
          <TabPane tabId={1}>
            <div className="mb-2 d-flex flex-column gap-1">
              {shortTermTops.map(track => {
                return <DisplayTrack
                  key={track.trackId}
                  trackImg={track.trackPicture}
                  trackName={track.trackName}
                  trackArtist={track.trackArtist}
                />
              })}
            </div>
          </TabPane>
          <TabPane tabId={2}>
            <div className="mb-2 d-flex flex-column gap-1">
              {medTermTops.map(track => {
                return <DisplayTrack
                  key={track.trackId}
                  trackImg={track.trackPicture}
                  trackName={track.trackName}
                  trackArtist={track.trackArtist}
                />
              })}
            </div>
          </TabPane>
          <TabPane tabId={3}>
            <div className="mb-2 d-flex flex-column gap-1">
              {longTermTops.map(track => {
                return <DisplayTrack
                  key={track.trackId}
                  trackImg={track.trackPicture}
                  trackName={track.trackName}
                  trackArtist={track.trackArtist}
                />
              })}
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}