import DisplayTrack from "./DisplayTrack"

export default function DisplayTrackList({tracks, loading}) {
  
  if (loading) {
    return (
      <div className="p-2 d-flex justify-content-center">
        <div className="loader" style={{width: "60px", height: "60px"}}></div>
      </div>
    )
  }

  return (
    <div className="d-flex flex-column gap-1">
      {tracks.map(track => {
        return <DisplayTrack
          key={track.trackId}
          trackImg={track.trackPicture}
          trackName={track.trackName}
          trackArtist={track.trackArtist}
        />
      })}
    </div>
  )
}