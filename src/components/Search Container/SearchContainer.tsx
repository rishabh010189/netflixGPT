import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { toggleSearchView } from "../../utils/searchSlice";
import SearchBox from "./SearchBox";
import SearchSuggestion from "./SearchSuggestion";

const SearchContainer = () => {
    const dispatch = useDispatch();

    const closeSearchHandler = () => {
        dispatch(toggleSearchView());
    }
  return (
    <div className="absolute h-full w-full bg-black/50 backdrop-blur-xl text-white z-50">
        <FontAwesomeIcon onClick={closeSearchHandler} className="text-3xl float-right mt-4 mr-4 cursor-pointer text-red-600" icon={faRectangleXmark} />
        <div className="flex mt-[10%] h-full">
            <SearchBox />
        </div>
    </div>
  )
}

export default SearchContainer