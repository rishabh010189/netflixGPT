import { useSelector } from "react-redux";
import MovieList from "../Shared/MovieList"

const MovieContainer = () => {
  const movies = useSelector((store:any) => store.movies);
  
  return (
    <div className="movieContainer mt-10 relative -top-[400px]">
      <MovieList title="No Playing" movieList={movies?.nowPlayingMovies}/>
      <MovieList title="Popular" movieList={movies?.popularMovies}/>
      <MovieList title="Top Rated" movieList={movies?.topRatedMovies}/>
      <MovieList title="Upcoming" movieList={movies?.upcomingMovies}/>
    </div>
  )
}

export default MovieContainer