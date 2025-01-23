import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    //Fetch Data from the TMDB API
    const getNowPlayingMovies = async () => {
      try{
        const res = await axiosInstance.get(
          "/3/movie/now_playing?language=en-US&page=1"
        )
        dispatch(addNowPlayingMovies(res.data?.results))
      }
      catch(err){
        console.error(err);
      }
    }
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies