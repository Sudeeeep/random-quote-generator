import propTypes from "prop-types";

const RandomQuotes = ({ quote, author, genre, setIsAuthorSelected }) => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-12 mt-12 pb-10 sm:w-1/2">
        <p className="border-l-4 border-[#F7DF94] px-10 text-3xl font-medium">
          "{quote}" {/*eslint-disable-line*/}
        </p>
        <div
          onClick={() => setIsAuthorSelected(true)}
          className="flex justify-between items-center ml-10 px-2 py-6 hover:bg-[#333333] hover:text-white cursor-pointer"
        >
          <div>
            <p className=" text-lg font-bold">{author}</p>
            <p className="text-sm text-[#828282] font-medium">{genre}</p>
          </div>
          <span className="material-symbols-outlined">trending_flat</span>
        </div>
      </div>
    </>
  );
};

RandomQuotes.propTypes = {
  quote: propTypes.string,
  author: propTypes.string,
  genre: propTypes.string,
  generateRandomQuote: propTypes.func,
  setIsAuthorSelected: propTypes.func,
};

export default RandomQuotes;
