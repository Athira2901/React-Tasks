import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState([
    { url: "https://picsum.photos/id/237/200/300" },
    { url: "https://picsum.photos/seed/picsum/200/300" },
    { url: "https://picsum.photos/200/300?grayscale" },
    { url: "https://picsum.photos/200/300/?blur" },
    { url: "https://picsum.photos/200/300.webp" },
   
  ]);
  function increment() {
    count < image.length ? setCount(count + 1) : alert("no images to show");
  }
  function decrement() {
    count > 0 ? setCount(count - 1) : alert("no images to show");
  }

  return (
    <>
      <div className="container">
        <h1>Picture Gallery</h1>
        <div className="btn-container ">
          <button onClick={decrement} className="btndec">
            -
          </button>
          <p>{count}</p>
          <button count={count} onClick={increment} className="btninc">
            +
          </button>
        </div>

          <ul className="picture">
            {image.map((pict, i) =>
              i < count ? (
                <li>
                  <img id="img" src={pict.url}></img>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
      </div>
    </>
  );
}

export default App;
