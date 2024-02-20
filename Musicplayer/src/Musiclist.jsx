import React from 'react'

function Musiclist(props) {
  return (
    <div>
        <div className="wrapper">
        {props.songs.map((song) => (
          <div
            key={song.id}
            className="img"
            onClick={() => props.selectMusic(song.id)}
          >
            <img className="image" src={song.image}></img>
            <div className="musicDetails">
              <p>{song.name}</p>
              <p className="composer">{song.composer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Musiclist