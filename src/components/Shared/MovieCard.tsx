import Constants from "../../utils/contants"

const MovieCard:React.FC<any> = ({movie}) => {
  return (
    <div className="movieCard mr-3 mb-10 mt-10 rounded-md min-w-[200px] max-h-[300px] cursor-pointer group duration-300 ease-in-out hover:scale-125 ">
        <img className="rounded-md h-full w-full" src={Constants.POSTER_BASE_URL+movie?.poster_path} />
    </div>
  )
}

export default MovieCard