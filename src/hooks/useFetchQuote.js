import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchQuote = (url, generateQuote) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [allQuotes, setAllQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setQuote(response.data.data[0].quoteText);
        setAuthor(response.data.data[0].quoteAuthor);
        setGenre(response.data.data[0].quoteGenre);
        setAllQuotes(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [generateQuote]);

  return { quote, author, genre, loading, allQuotes };
};
