import { useSelector } from "react-redux";
import Header from "../Header/Header"
import Home from "../Home/Home"
import SearchContainer from "../Search Container/SearchContainer"

const Browse = () => {
  const isSearchVisisble = useSelector((state:any) => state.search.isSearchVisisble);
  return (
    <div className="bg-black">
        <Header />
        { isSearchVisisble && <SearchContainer />}
        <Home />
    </div>
  )
}

export default Browse