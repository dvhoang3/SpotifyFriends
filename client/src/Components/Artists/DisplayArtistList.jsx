import DisplayArtist from "./DisplayArtist"

export default function DisplayArtistList({artists, loading}) {

  if (loading) {
    return (
      <div className="p-2 d-flex justify-content-center">
        <div className="loader" style={{width: "60px", height: "60px"}}></div>
      </div>
    )
  }

  return (
    <div className="d-flex flex-column gap-1">
      {artists.map(artist => {
        return <DisplayArtist
          key={artist.artistId}
          artistImg={artist.artistPicture}
          artistName={artist.artistName}
          artistGenres={artist.artistGenres}
        />
      })}
    </div>
  )
}