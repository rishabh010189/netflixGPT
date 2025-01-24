import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    //Fetch Data from the TMDB API
    const getTopRatedMovies = async () => {
      try{
        const res = await axiosInstance.get(
          "/3/movie/top_rated"
        )
        dispatch(addTopRatedMovies(res.data?.results))
      }
      catch(err){
        console.error(err);
      }
    }
    useEffect(() => {
      getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies