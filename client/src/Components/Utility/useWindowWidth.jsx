import { useState, useEffect } from "react"

export default function useWindowWidth(breakpoint) {
  const [previousWindowWidth, setPreviousWindowWidth] = useState(window.innerWidth)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [displayTab, setDisplayTab] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
    if (windowWidth < breakpoint) setDisplayTab(false)
    else setDisplayTab(true)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    if (previousWindowWidth >= breakpoint && windowWidth < breakpoint) setDisplayTab(false)
    else if (previousWindowWidth < breakpoint && windowWidth >= breakpoint) setDisplayTab(true)

    setPreviousWindowWidth(windowWidth)
  }, [windowWidth])

  return {displayTab, setDisplayTab, windowWidth}
}