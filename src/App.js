import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setCharacters(res.data.results);
      })
  }, []);

  return (
    <div> <div className="red"> <a href="https://rickandmortyapi.com/documentation" className="link" target="_blank" rel="noopener noreferrer">
        Docs
      </a>
      <a href="https://rickandmortyapi.com/documentation" className="link" target="_blank" rel="noopener noreferrer">
        About
      </a>
      <button className="btn">support us</button></div>
      <div className="header">
        <h1>Rick and Morty Characters</h1>
      </div>
    
      <div className="container">
        <div className="row">
          {
          characters.map((char) => (
            <div key={char.id} className="block">
              <div className="block-row">
                <div className="col-1">
                  <img src={char.image} alt={char.name} />
                </div>
                <div className="col-2">
                  <h3>{char.name}</h3>
                  <p>
                    {char.status}-{char.species}
                  </p>
                  <div className="box">
                    <p className="p-p">Last known location:</p>
                    <p className="p-p2">{char.origin.name}</p>
                  </div>
                  <div className="box">
                    <p className="p-p">First seen in:</p>
                  <p className="p-p2">{char.location.name}</p>
                  </div>
                </div>
              </div>
              
            </div>
          ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;
