import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import MovieContainer from "../Movie Container/MovieContainer";
import ShowcasePreview from "../Showcase Preview/ShowcasePreview";

const Home = () => {
  // custom hook for getting Now playing movies
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return <div>
    <ShowcasePreview />
    <MovieContainer />
  </div>;
};

export default Home;
