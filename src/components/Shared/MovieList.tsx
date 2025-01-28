import MovieCard from "./MovieCard";

const MovieList:React.FC<any> = ({title, movieList}) => {
  return (
    <div className="movieList pl-24 mb-10 overflow-y-hidden">
        <div className="text-white text-3xl mb-3">{title}</div>
        <div className="flex overflow-x-auto pb-2">
        {movieList?.map((movie:any) => <MovieCard key={movie.id} movie={movie}/>)}

        </div>
    </div>
  )
}

export default MovieList