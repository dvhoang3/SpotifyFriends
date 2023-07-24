import { useEffect, useState } from "react";

import axios from 'axios'

export default function useAuth(code, SERVER_ENDPOINT) {
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"))
  const [accessToken, setAccessToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    if (!refreshToken && code) {
      loginPost()
    }
    else if (refreshToken) {
      refreshPost()
    }
  }, [])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return

    const interval = setInterval(() => {
      refreshPost()
    }, ((expiresIn - 60) * 1000))

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  function loginPost() {
    axios.post(`${SERVER_ENDPOINT}/login`, {
      code,
    }).then(res => {
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      localStorage.setItem("refreshToken", res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
      
      window.history.pushState({}, null, "/")
    }).catch(() => {
      window.location = "/"
    })
  }

  function refreshPost() {
    axios.post(`${SERVER_ENDPOINT}/refresh`, {
      refreshToken,
    }).then(res => {
      setAccessToken(res.data.accessToken)
      setExpiresIn(res.data.expiresIn)
      
      window.history.pushState({}, null, "/")
    }).catch(() => {
      window.location = "/"
    })
  }

  return accessToken
}