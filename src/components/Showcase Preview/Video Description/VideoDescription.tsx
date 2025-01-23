
const VideoDescription:React.FC<{title:string, overview:string}> = ({title,overview}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{overview}</p>
    </div>
  )
}

export default VideoDescription