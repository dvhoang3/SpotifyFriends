import axios from "axios"
import { useEffect, useState } from "react"

export default function getTopTracks(accessToken, serverEndpoint, timeSpan) {
  const [topTracks, setTopTracks] = useState([])
  const [loading, setLoading] = useState(true)

  const [topTracksAudioFeatures, setTopTracksAudioFeatures] = useState({
    acousticness: 0,
    danceability: 0,
    energy: 0,
    instrumentalness: 0,
    liveness: 0,
    loudness: 0,
    speechiness: 0,
    valence: 0
  })
  const [termData, setTermData] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    setLoading(true)
    axios.get(`${serverEndpoint}/top_tracks/${timeSpan}/?access_token=${accessToken}`).then(data => {
      setTopTracks(data.data.tracks)
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    if (!topTracks) return

    axios.get(`${serverEndpoint}/tracks/audio_features/?tracks=${topTracks.map(track => track.trackId)}&access_token=${accessToken}`).then(data => {
      setTopTracksAudioFeatures(() => {return {...data.data}})
    })
  }, [topTracks])
  useEffect(() => {
    setTermData(() => [
      topTracksAudioFeatures.acousticness,
      topTracksAudioFeatures.danceability,
      topTracksAudioFeatures.energy,
      topTracksAudioFeatures.instrumentalness,
      topTracksAudioFeatures.liveness,
      topTracksAudioFeatures.loudness,
      topTracksAudioFeatures.speechiness,
      topTracksAudioFeatures.valence
    ])
  }, [topTracksAudioFeatures])

  return {topTracks, loading, termData}
}