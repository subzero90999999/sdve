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
    <div className="app-shell">
      <nav className="red">
      
        <div className="nav-links">
          <a href="https://rickandmortyapi.com/documentation" className="link" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href="https://rickandmortyapi.com/about" className="link" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://rickandmortyapi.com/" className="btn" target="_blank" rel="noopener noreferrer">Visit API <span>↗</span></a>
        </div>
      </nav>
      <header className="header">
        <h1>The Rick and Morty API</h1>
        <p className="intro">A field guide to the strange, brilliant, and occasionally dangerous lifeforms across the multiverse.</p>
        <div className="header-meta"><span>{characters.length || "--"} records loaded</span><span className="meta-line" /><span>updated in real time</span></div>
      </header>

      <main className="container">
        <div className="row">
          {
          characters.map((char) => (
            <div key={char.id} className="block">
              <div className="block-row">
                <div className="col-1">
                  <img src={char.image} alt={char.name} />
                </div>  
                <div className="col-2">
                  <div className="card-index">NO. {String(char.id).padStart(3, "0")}</div>
                  <h3>{char.name}</h3>
                  <p className="species"><span className={`status status-${char.status.toLowerCase()}`} />{char.status} <span className="separator">/</span> {char.species}</p>
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
      </main>

    </div>
  );
}

export default App;
 