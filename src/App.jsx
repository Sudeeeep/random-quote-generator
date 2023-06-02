import axios from "axios";
import { useEffect, useState } from "react";
import RandomQuotes from "./components/RandomQuotes";
import AllQuotes from "./components/AllQuotes";
import Footer from "./components/Footer";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isAuthorSelected, setIsAuthorSelected] = useState(false);

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = async () => {
    setIsAuthorSelected(false);
    axios
      .get("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((response) => {
        setQuote(response.data.data[0].quoteText);
        setAuthor(response.data.data[0].quoteAuthor);
        setGenre(response.data.data[0].quoteGenre);
      });
  };

  return (
    <div className="container relative min-h-screen m-auto w-9/12 font-['Raleway']">
      <div className="flex gap-1 justify-end mt-4">
        <button onClick={generateRandomQuote} className="flex">
          Random <span className="material-symbols-outlined">autorenew</span>
        </button>
      </div>
      {!isAuthorSelected && (
        <RandomQuotes
          quote={quote}
          author={author}
          genre={genre}
          generateRandomQuote={generateRandomQuote}
          setIsAuthorSelected={setIsAuthorSelected}
        />
      )}

      {isAuthorSelected && <AllQuotes author={author} />}

      <Footer />
    </div>
  );
}

export default App;
