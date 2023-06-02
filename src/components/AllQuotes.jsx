import axios from "axios";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

const AllQuotes = ({ author }) => {
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${author}&limit=100`
      )
      .then((response) => setAllQuotes(response.data.data));
  }, [author]);

  return (
    <div className="sm:w-1/2 m-auto pb-10">
      <h1 className="my-10 ml-10 text-2xl font-bold">{author}</h1>
      <div className="flex flex-col gap-10 mb-10">
        {allQuotes.map((quote, index) => {
          return (
            <div key={index}>
              <p className="border-l-4 border-[#F7DF94] px-10 text-2xl font-medium">
                "{quote.quoteText}" {/*eslint-disable-line*/}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

AllQuotes.propTypes = {
  author: propTypes.string,
};

export default AllQuotes;
