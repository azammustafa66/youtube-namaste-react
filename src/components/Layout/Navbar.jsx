import { useEffect, useState } from "react";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";
import { User } from "@styled-icons/entypo/User";
import { Youtube } from "@styled-icons/bootstrap/Youtube";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { fetchSuggestions } from "../../utils/fetchFromAPI";
import { cacheResults } from "../../utils/searchSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchCache[searchTerm]
        ? setSuggestions(searchCache[searchTerm])
        : handleSearch(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuggestions(false);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    fetchSuggestions(query).then((data) => {
      setSuggestions(data[1]);
      dispatch(cacheResults({ [searchTerm]: data[1] }));
    });
  };

  const handleClickOnSuggestion = (suggestion) => {
    setSearchTerm(suggestion);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <nav className="flex items-center justify-between mt-2 mx-auto sticky">
      <div className="flex items-center gap-10">
        <Menu
          size={40}
          onClick={toggleMenuHandler}
          className="cursor-pointer"
        />
        <Link to={"/"}>
          <Youtube size={50} />
        </Link>
      </div>
      <div className="flex w-1/2 justify-center">
        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-500 outline-blue-500 w-full rounded-l-full px-3 h-14"
              value={searchTerm}
              onChange={(event) => handleSearch(event.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <SearchOutline
              height={55}
              size={50}
              className="bg-[#faf6f9] rounded-r-full p-3 text-center cursor-pointer"
              onClick={handleSubmit}
            />
          </form>
          <div className="fixed rounded-lg">
            <ul className="cursor-default bg-white hover:bg-gray-100">
              {showSuggestions && suggestions.length > 0 && (
                <div className="fixed w-80 border border-gray-50 ml-5">
                  <ul className="cursor-default z-50 bg-white hover:bg-gray-100">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100"
                        onClick={() => handleClickOnSuggestion(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <User size={40} />
      </div>
    </nav>
  );
};

export default Navbar;
