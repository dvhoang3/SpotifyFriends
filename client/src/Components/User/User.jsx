import UserProfileComponent from './UserProfileComponent'
import UserTopTracksComponent from '../Tracks/UserTopTracksComponent'
import UserTopArtistsComponent from '../Artists/UserTopArtistsComponent'
import getTopTracks from '../Tracks/getTopTracks'

import { Container } from 'reactstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  plugins,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function User({accessToken, serverEndpoint, userId}) {
  if (!userId) return

  const [displayName, setDisplayName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const {topTracks: shortTermTops, loading: shortTermLoading, termData: shortTermData} = getTopTracks(accessToken, serverEndpoint, 'short_term')
  const {topTracks: medTermTops, loading: medTermLoading, termData: medTermData} = getTopTracks(accessToken, serverEndpoint, 'medium_term')
  const {topTracks: longTermTops, loading: longTermLoading, termData: longTermData} = getTopTracks(accessToken, serverEndpoint, 'long_term')

  const data = {
    labels: ['Acousticness', 'Dancibility', 'Energy', 'Instrumentalness', 'Liveness', 'Loudness', 'Speechiness', 'Valence'],
    datasets: [
      {
        label: 'This Month',
        data: shortTermData,
        backgroundColor: 'rgba(255, 0, 0, 0)',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Last 6 Months',
        data: medTermData,
        backgroundColor: 'rgba(0, 255, 0, 0)',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Last Few Years',
        data: longTermData,
        backgroundColor: 'rgba(0, 0, 255, 0)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
      }
    ]
  }
  const options = {
    scales: {
      r: {
          suggestedMin: 0,
          suggestedMax: 1
      }
    },
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }

  useEffect(() => {
    axios.get(`${serverEndpoint}/user/${userId}/?access_token=${accessToken}`).then(data => {
      setDisplayName(data.data.displayName)
      setProfilePicture(data.data.displayPicture)
    })
  }, [])

  return (
    <Container className="mt-3 mb-4 d-flex flex-column align-items-center">
      <Container className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-md-3" style={{maxWidth: "50%"}}>
        <UserProfileComponent
          displayName={displayName}
          profilePicture={profilePicture}
          userId={userId}
        />
      </Container>
      <hr className="my-4 w-100" />
      <Container className="d-flex flex-column align-items-center flex-md-row align-items-md-start justify-content-center gap-3">
        <UserTopTracksComponent
          shortTermTops={shortTermTops}
          shortTermLoading={shortTermLoading}
          medTermTops={medTermTops}
          medTermLoading={medTermLoading}
          longTermTops={longTermTops}
          longTermLoading={longTermLoading}
        />
        <UserTopArtistsComponent
          accessToken={accessToken}
          serverEndpoint={serverEndpoint}
        />
      </Container>
      <Container className="py-5 d-flex flex-column align-items-center" style={{height: "80vh"}}>
        <h5 className="text-center">Top Track Attributes</h5>
        <Radar
          data={data}
          options={options}
        />
      </Container>
    </Container>
  )
}