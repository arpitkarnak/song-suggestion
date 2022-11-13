import "./styles.css";
import { useState } from "react";

const songDB = {
  english: [
    {
      name: "Love me like you do ",
      rating: "4.5/5",
      description: "This song is created by Ellie Goulding"
    },
    {
      name: "Alone",
      rating: "4.2/5",
      description: "This is one of most popular song by Alan Walker"
    },
    {
      name: "faded",
      rating: "4.6/5",
      description: "One of the most popular song in world"
    }
  ],

  hindi: [
    {
      name: "Kesariya",
      rating: "4.8/5",
      description: "One of the best song by Arjit Singh"
    },
    {
      name: "Vaaste",
      rating: "4.9/5",
      description:
        "This song is in the list of most viewed song in Hindi Language"
    },
    {
      name: "Hawayein",
      rating: "4.1/5",
      description: "One of coolest song by Arjit"
    }
  ],
  punjabi: [
    {
      name: "Hawayein",
      rating: "3.8/5",
      description: "This song has seprate fanbase in Punjab"
    },
    {
      name: "Naah",
      rating: "4.9/5",
      description: " Song by Harrdy Sandhu and it crosses more that 500M views"
    },
    {
      name: "Lahore",
      rating: "4.1/5",
      description: "Song by Guru Randhawa "
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("punjabi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎶 🎵 Good Songs 🎵 🎶 </h1>
      <p>These are some music that i recommed</p>

      <div>
        {Object.keys(songDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <br />
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
              <p> {song.description}</p>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}
