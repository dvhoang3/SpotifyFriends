import { useState, useEffect } from "react"

export default function useWindowWidth(breakpoint) {
  const [windowWidth, setWindowWidth] = useState([window.innerWidth, window.innerWidth])
  const [displayTab, setDisplayTab] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth((previousWidth) => [previousWidth[1], window.innerWidth])
    }

    window.addEventListener('resize', handleWindowResize)
    if (windowWidth[1] < breakpoint) setDisplayTab(false)
    else setDisplayTab(true)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth[0] >= breakpoint && windowWidth[1] < breakpoint) setDisplayTab(false)
    else if (windowWidth[0] < breakpoint && windowWidth[1] >= breakpoint) setDisplayTab(true)
  }, [windowWidth])

  return {displayTab, setDisplayTab, windowWidth}
}