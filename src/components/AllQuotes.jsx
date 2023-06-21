import propTypes from "prop-types";
import { useFetchQuote } from "../hooks/useFetchQuote";

const AllQuotes = ({ author, generateQuote }) => {
  const { allQuotes, loading } = useFetchQuote(
    `https://quote-garden.onrender.com/api/v3/quotes?author=${author}&limit=100`,
    generateQuote
  );

  if (loading) {
    return (
      <div className="sm:w-1/2 m-auto pb-10">
        <h1 className="my-10 ml-10 text-2xl font-bold">{author}</h1>
        <div className="flex flex-col gap-10 mb-10">
          <div>
            <p className="border-l-4 border-[#F7DF94] px-10 text-2xl font-medium">
              LOADING...
            </p>
          </div>
        </div>
      </div>
    );
  }

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
  generateQuote: propTypes.bool,
};

export default AllQuotes;
