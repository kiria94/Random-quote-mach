import { useEffect, useState } from "react";
import "./App.css";
import React from "react";

function App() {
  //https://api.quotable.io/random
  // init value to empty obj, cause we providing data from obj
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []); // [] use effecthook just once

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      }) // first fetch data, then return response in json format
      // second then to fetch data and setQuote.
      .then((data) => {
        setQuote({
          text: data.content,
          author: data.author,
        });
      });
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <button onClick={getQuote} id="new-quote">
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            quote.text
          }
        >
          Tweet Post
        </a>
      </div>
    </div>
  );
}

export default App;
