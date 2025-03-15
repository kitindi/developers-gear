import { Link } from "react-router";

const SearchForm = () => {
  return (
    <form action="" className="flex-grow" method="POST">
      <div className="flex items-center space-x-4 border border-gray-200 rounded-full p-1">
        <input type="text" placeholder="I'm shopping for ..." className=" px-4.5 py-2.5 flex-grow focus:outline-none" />
        <Link to="/search" className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </Link>
      </div>
    </form>
  );
};

export default SearchForm;
