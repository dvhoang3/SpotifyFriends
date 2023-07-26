require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebAPI = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const axios = require("axios")

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const PORT = process.env.PORT

// Authentication
app.post('/login', (req, res) => {
  const code = req.body.code

  const spotifyApi = new SpotifyWebAPI({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }).catch(() => {
    res.sendStatus(400)
  })
})

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken

  const spotifyApi = new SpotifyWebAPI({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken
  })

  spotifyApi.refreshAccessToken().then(data => {
    res.json({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in
    })
  }).catch(() => {
    res.sendStatus(400)
  })
})


// Data
app.get('/user', (req, res) => {
  const accessToken = req.query.access_token

  axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }).then(data => {
    res.json({
      userId: data.data.id,
      userUri: data.data.uri,
      displayName: data.data.display_name,
      displayPicture: data.data.images.filter(pic => pic.width === 300)[0].url
    })
  }).catch(err => {
    res.sendStatus(400)
  })

})

app.get('/top_tracks/:time_range', (req, res) => {
  const access_token = req.query.access_token

  axios.get('https://api.spotify.com/v1/me/top/tracks', {
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    params: {
      limit: 50,
      time_range: req.params.time_range
    }
  }).then(data => {
    res.json({
      tracks: data.data.items.map(track => {
        return {
          trackId: track.id,
          trackUri: track.uri,
          trackName: track.name,
          trackArtist: track.artists[0].name,
          trackAlbum: track.album.name,
          trackPicture: track.album.images[track.album.images.length - 1].url
        }
      })
    })
  }).catch(err => {
    res.sendStatus(400)
  })
})

app.get('/top_artists/:time_range', (req, res) => {
  const access_token = req.query.access_token

  axios.get('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    params: {
      limit: 50,
      time_range: req.params.time_range
    }
  }).then(data => {
    res.json({
      artists: data.data.items.map(artist => {
        return {
          artistId: artist.id,
          artistUri: artist.uri,
          artistName: artist.name,
          artistGenres: artist.genres,
          artistPicture: artist.images[artist.images.length - 1].url
        }
      })
    })
  }).catch(err => {
    res.sendStatus(400)
  })
})

app.listen(PORT)