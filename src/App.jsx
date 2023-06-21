import { useState } from "react";
import RandomQuotes from "./components/RandomQuotes";
import AllQuotes from "./components/AllQuotes";
import Footer from "./components/Footer";
import { useFetchQuote } from "./hooks/useFetchQuote";

function App() {
  const [generateQuote, setGenerateQuote] = useState(false);
  const [isAuthorSelected, setIsAuthorSelected] = useState(false);
  const { quote, author, genre, loading } = useFetchQuote(
    "https://quote-garden.onrender.com/api/v3/quotes/random",
    generateQuote
  );

  const generateRandomQuote = async () => {
    setIsAuthorSelected(false);
    setGenerateQuote(true);
    if (generateQuote) {
      setGenerateQuote(false);
    }
  };

  console.log(quote);

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
          loading={loading}
          generateRandomQuote={generateRandomQuote}
          setIsAuthorSelected={setIsAuthorSelected}
        />
      )}

      {isAuthorSelected && (
        <AllQuotes author={author} generateQuote={generateQuote} />
      )}

      <Footer />
    </div>
  );
}

export default App;
