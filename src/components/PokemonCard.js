import axios from "axios";
import {useState, useEffect} from "react";

export default function PokemonCard() {
  var [content, setContent] = useState([]);

  useEffect(function() {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => setContent(response.data));
  }, [setContent]);

  return(
    <>
    <h1>Pokemons</h1>
    <ul>
      {content.results?.map(result => <p key={result.name}>{result.name}</p>)}
    </ul>
    </>
  );
}