import axios from "axios";
import { useEffect, useState } from "react";
import RandomQuotes from "./components/RandomQuotes";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = async () => {
    axios
      .get("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((response) => {
        setQuote(response.data.data[0].quoteText);
        setAuthor(response.data.data[0].quoteAuthor);
        setGenre(response.data.data[0].quoteGenre);
      });
  };

  return (
    <div className="container m-auto w-9/12 font-['Raleway']">
      <RandomQuotes
        quote={quote}
        author={author}
        genre={genre}
        generateRandomQuote={generateRandomQuote}
      />
    </div>
  );
}

export default App;
