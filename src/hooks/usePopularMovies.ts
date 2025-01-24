import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    //Fetch Data from the TMDB API
    const getPopularMovies = async () => {
      try{
        const res = await axiosInstance.get(
          "/3/movie/popular"
        )
        dispatch(addPopularMovies(res.data?.results))
      }
      catch(err){
        console.error(err);
      }
    }
    useEffect(() => {
      getPopularMovies();
    }, []);
}

export default usePopularMovies