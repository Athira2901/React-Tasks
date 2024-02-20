import React from 'react'
import { TfiControlShuffle } from "react-icons/tfi";
import { RxLoop } from "react-icons/rx";

function Playlist(props) {
  return (
    <div>
      <div className="bg">
        <div className="count">{props.count}</div>
        <div className="bgdetails1">
          <img
            style={{ boxShadow: `4px 4px 4px ${props.music.color1}` }}
            src={props.music.image}
            className="bgimg"
          />

          <div className="bgdetails">
            <h3>{props.music.name}</h3>
            <p>{props.music.composer}</p>
          </div>
        </div>
        <div className="playbutton">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-previous.svg"
            onClick={props.previousbtn}
          />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-pause.svg"></img>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-next.svg"
            onClick={props.nextbtn}
          ></img>
          <button className="shufflebtn" onClick={props.shuffle}>
            {props.isshuffle ? <RxLoop /> : <TfiControlShuffle />}
          </button>
        </div>
        <audio src={props.music.music} controls className="bgsong" autoPlay></audio>
      </div>
    </div>
  )
}

export default Playlist