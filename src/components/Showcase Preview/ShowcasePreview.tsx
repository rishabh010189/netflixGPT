import { useSelector } from "react-redux"
import VideoBackground from "./Video Background/VideoBackground"
import VideoDescription from "./Video Description/VideoDescription"

const ShowcasePreview = () => {
    const movies = useSelector((store:any) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const primeTimeMovie = movies[0];
    const {title, overview, id} = primeTimeMovie;
  return (
    <div className="">
        <VideoDescription title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default ShowcasePreview