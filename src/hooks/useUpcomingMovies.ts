import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    //Fetch Data from the TMDB API
    const getUpcomingMovies = async () => {
      try{
        const res = await axiosInstance.get(
          "/3/movie/upcoming"
        )
        dispatch(addUpcomingMovies(res.data?.results))
      }
      catch(err){
        console.error(err);
      }
    }
    useEffect(() => {
      getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies