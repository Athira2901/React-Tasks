import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TfiControlShuffle } from "react-icons/tfi";
import { RBJ, Terevaste, Jawan, Enemy, Chithha } from "./Songs/music.jsx";
import {
  RBJimg,
  Terevaasteimg,
  Jawanimg,
  Enemyimg,
  Chithhaimg,
} from "./Images/picture.jsx";
import { RxLoop } from "react-icons/rx";
import { useEffect } from "react";
import Musiclist from "./Musiclist.jsx";
import Playlist from "./Playlist.jsx";

function Songs() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const [songs, setSongs] = useState([
    {
      music: RBJ,
      image: RBJimg,
      id: 1,
      name: "Tujh Mein Rab Dikhta Hai",
      composer: "Salim-Sulaiman",
      color1: "brown",
    },

    {
      music: Terevaste,
      image: Terevaasteimg,
      id: 2,
      name: "Tere vaaste",
      composer: "Sachin- Jigar",
      color1: "brown",
    },

    {
      music: Jawan,
      image: Jawanimg,
      id: 3,
      name: "Chaleya",
      composer: "Anirudh Ravichander",
      color1: "green",
    },

    {
      music: Enemy,
      image: Enemyimg,
      id: 4,
      name: "Tum tum",
      composer: " Thaman S",
      color1: "black",
    },

    {
      music: Chithha,
      image: Chithhaimg,
      id: 5,
      name: "Unakk than",
      composer: "Santhosh Narayanan",
      color1: "green",
    },
  ]);
  const [music, setMusic] = useState({
    music: RBJ,
    image: RBJimg,
    id: 1,
    name: "Tujh Mein Rab Dikhta Hai",
    composer: "Salim-Sulaiman",
  });

  const [isshuffle, setIsshuffle] = useState(true);

  function toast1(msg) {
    toast(msg, {
      autoClose: 2500,
    });
  }

  function shuffle() {
    setIsshuffle((sh) => !sh);
  }

  useEffect(() => {
    toast1("playing next track!!");
  }, [music]);

  function selectMusic(id) {
    let smusic = songs.find((song) => song.id === id);
    setMusic(smusic);
    console.log(smusic);
    // toast1("playing next track!!");

    async function countnos(n) {
      await new Promise((resolve) =>
        setTimeout(() => {
          if (n == 5) {
            if (isshuffle) {
              let random = Math.floor(Math.random() * (6 - 1)) + 1;
              selectMusic(random);
            } else {
              id = id + 1;
              if (id > 5) {
                id = 1;
                selectMusic(id);
              }
              selectMusic(id);
            }
          } else {
            resolve(setCount(n));
            console.log(n);
          }
        }, 1000)
      );
    }

    async function counter() {
      for (let i = 1; i <= 5; i++) {
        await countnos(i);
      }
    }

    async function countloop() {
      for (let i = 0; i < 1; i++) {
        await counter();
      }
    }
    countloop();
  }

  function previousbtn() {
    // toast1("playing previous track!!")
    if (music.id == 1) {
      selectMusic(5);
    } else {
      selectMusic(music.id - 1);
    }
  }
  function nextbtn() {
    // toast1("playing next track!!")
    if (music.id == 5) {
      selectMusic(1);
    } else {
      selectMusic(music.id + 1);
    }
  }
  function logout() {
    navigate("/");
  }
  let getuserObject = window.localStorage.getItem("userObject");
  let parseuserObject = JSON.parse(getuserObject);
  console.log(parseuserObject);

  return (
    <div className="container">
      <div className="logcontainer">
          <div className="profile">
            <img src={parseuserObject.picture} className="profileimg"></img>
            <h4>{parseuserObject.name}</h4>
          </div>
          <h1>SONG LIST</h1>
          <div className="logoutbtn">
            <button onClick={logout} className="logout">
              Logout
            </button>
          </div>
      </div>
      <ToastContainer />

      <Playlist
        count={count}
        music={music}
        shuffle={shuffle}
        previousbtn={previousbtn}
        nextbtn={nextbtn}
        isshuffle={isshuffle}
      />

      <Musiclist songs={songs} selectMusic={selectMusic} />
    </div>
  );
}

export default Songs;
