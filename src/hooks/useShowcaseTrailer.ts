import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useShowcaseTrailer  = (movieId: number) => {
    const dispatch = useDispatch();

  const getTrailer = async () => {
    const response = await axiosInstance(`/3/movie/${movieId}/videos`);

    if (!response) return;

    const trailerData = response.data?.results?.find(
      (m: any) => m.type === "Trailer"
    );

    const showcaseVideo =
      trailerData ??
      response.data?.results?.find((m: any) => m.type === "Teaser");
      dispatch(addTrailerVideo(showcaseVideo));
  };

  useEffect(() => {
    getTrailer();
  }, [movieId]);
}

export default useShowcaseTrailer;