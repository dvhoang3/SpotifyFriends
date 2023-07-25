import { useEffect, useState } from 'react'

import { Nav, NavItem, TabContent, TabPane } from 'reactstrap'

import axios from 'axios'
import DisplayArtist from './DisplayArtist'

export default function UserTopArtistsComponent({ accessToken, serverEndpoint }) {
  const [activeTab, setActiveTab] = useState(1)

  const [shortTermTops, setShortTermTops] = useState([])
  const [medTermTops, setMedTermTops] = useState([])
  const [longTermTops, setLongTermTops] = useState([])

  useEffect(() => {
    axios.get(`${serverEndpoint}/top_artists/short_term/?access_token=${accessToken}`).then(data => {
      setShortTermTops(data.data.artists)
    })
    axios.get(`${serverEndpoint}/top_artists/medium_term/?access_token=${accessToken}`).then(data => {
      setMedTermTops(data.data.artists)
    })
    axios.get(`${serverEndpoint}/top_artists/long_term/?access_token=${accessToken}`).then(data => {
      setLongTermTops(data.data.artists)
    })
  }, [])

  return (
    <div className="d-flex flex-column align-items-center border" style={{width: "400px", maxHeight: "60vh", minWidth: "330px"}}>
      <div className="my-1" style={{fontSize: "1.2em"}}>Top Artists</div>
      <Nav tabs justified className="my-1 w-100 border-bottom-0">
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
      <TabContent className="w-100" style={{overflowY: "auto", overflowX: "hidden"}} activeTab={activeTab}>
        <TabPane tabId={1}>
          <div className="mb-2 d-flex flex-column gap-1">
            {shortTermTops.map(artist => {
              return <DisplayArtist
                key={artist.artistId}
                artistImg={artist.artistPicture}
                artistName={artist.artistName}
                artistGenres={artist.artistGenres}
              />
            })}
          </div>
        </TabPane>
        <TabPane tabId={2}>
          <div className="mb-2 d-flex flex-column gap-1">
            {medTermTops.map(artist => {
              return <DisplayArtist
                key={artist.artistId}
                artistImg={artist.artistPicture}
                artistName={artist.artistName}
                artistGenres={artist.artistGenres}
              />
            })}
          </div>
        </TabPane>
        <TabPane tabId={3}>
          <div className="mb-2 d-flex flex-column gap-1">
            {longTermTops.map(artist => {
              return <DisplayArtist
                key={artist.artistId}
                artistImg={artist.artistPicture}
                artistName={artist.artistName}
                artistGenres={artist.artistGenres}
              />
            })}
          </div>
        </TabPane>
      </TabContent>
    </div>
  )
}