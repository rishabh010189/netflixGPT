import { useSelector } from "react-redux";
import useShowcaseTrailer from "../../../hooks/useShowcaseTrailer";

const VideoBackground: React.FC<{ movieId: number }> = ({ movieId }) => {
    const showcaseVideo = useSelector((store:any) => store.movies.trailerVideo);
    useShowcaseTrailer(movieId);
  return (
    <div className="h-[calc(100vh-100px)] w-screen">
      <iframe
        className="w-screen h-full aspect-video"
        src={`https://www.youtube.com/embed/${showcaseVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
