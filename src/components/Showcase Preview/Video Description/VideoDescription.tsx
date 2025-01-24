import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const VideoDescription:React.FC<{title:string, overview:string}> = ({title,overview}) => {
  return (
    <div className="w-full aspect-video pt-80 absolute text-white bg-gradient-to-r from-black pl-24">
        <h1 className="text-5xl mb-4">{title}</h1>
        <p className="w-1/3">{overview}</p>
        <div className="mt-8">
          <button className="py-2 rounded-sm px-4 bg-white text-black font-bold text-lg hover:bg-slate-200">
            <FontAwesomeIcon icon={faPlay} className="pr-2"/>
            Play
          </button>

          <button className="py-2 ml-8 rounded-sm px-4 bg-gray-600 text-white font-bold text-lg hover:bg-gray-500">
            <FontAwesomeIcon icon={faCircleInfo} className="pr-2"/>
            More Info
          </button>
        </div>
    </div>
  )
}

export default VideoDescription