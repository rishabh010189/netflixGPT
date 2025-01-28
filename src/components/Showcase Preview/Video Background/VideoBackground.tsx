import { useSelector } from "react-redux";
import useShowcaseTrailer from "../../../hooks/useShowcaseTrailer";

const VideoBackground: React.FC<{ movieId: number }> = ({ movieId }) => {
    const showcaseVideo = useSelector((store:any) => store.movies.trailerVideo);
    useShowcaseTrailer(movieId);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        // &loop=1&playlist=${showcaseVideo?.key}
        src={`https://www.youtube.com/embed/${showcaseVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
