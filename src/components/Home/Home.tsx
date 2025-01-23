import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MovieContainer from "../Movie Container/MovieContainer";
import ShowcasePreview from "../Showcase Preview/ShowcasePreview";

const Home = () => {
  // custom hook for getting Now playing movies
  useNowPlayingMovies();

  return <div>
    <ShowcasePreview />
    <MovieContainer />
  </div>;
};

export default Home;
