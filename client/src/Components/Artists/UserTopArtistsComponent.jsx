import DisplayArtistList from './DisplayArtistList'
import useWindowWidth from '../Utility/useWindowWidth'

import { useEffect, useState } from 'react'
import { Nav, NavItem, TabContent, TabPane } from 'reactstrap'
import axios from 'axios'

export default function UserTopArtistsComponent({ accessToken, serverEndpoint }) {
  const [activeTab, setActiveTab] = useState(1)

  const [shortTermTops, setShortTermTops] = useState([])
  const [medTermTops, setMedTermTops] = useState([])
  const [longTermTops, setLongTermTops] = useState([])
  const [shortTermLoading, setShortTermLoading] = useState(true)
  const [medTermLoading, setMedTermLoading] = useState(true)
  const [longTermLoading, setLongTermLoading] = useState(true)

  const {displayTab, setDisplayTab} = useWindowWidth(768)

  useEffect(() => {
    setShortTermLoading(true)
    setMedTermLoading(true)
    setLongTermLoading(true)
    axios.get(`${serverEndpoint}/top_artists/short_term/?access_token=${accessToken}`).then(data => {
      setShortTermTops(data.data.artists)
      setShortTermLoading(false)
    })
    axios.get(`${serverEndpoint}/top_artists/medium_term/?access_token=${accessToken}`).then(data => {
      setMedTermTops(data.data.artists)
      setMedTermLoading(false)
    })
    axios.get(`${serverEndpoint}/top_artists/long_term/?access_token=${accessToken}`).then(data => {
      setLongTermTops(data.data.artists)
      setLongTermLoading(false)
    })
  }, [])

  return (
    <div className="d-flex flex-column align-items-center" style={{width: "400px", minWidth: "330px"}}>
      <h5 className={`m-0 py-2 w-100 text-center ${displayTab ? "border-top border-start border-end" : "border"}`} style={{cursor: "pointer"}} onClick={() => setDisplayTab(!displayTab)}>
        Top Artists
      </h5>
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
        <TabContent className="w-100 my-2" style={{maxHeight: "50vh", overflowY: "auto", overflowX: "hidden"}} activeTab={activeTab}>
          <TabPane tabId={1}>
            <DisplayArtistList artists={shortTermTops} loading={shortTermLoading} />
          </TabPane>
          <TabPane tabId={2}>
            <DisplayArtistList artists={medTermTops} loading={medTermLoading} />
          </TabPane>
          <TabPane tabId={3}>
            <DisplayArtistList artists={longTermTops} loading={longTermLoading} />
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}