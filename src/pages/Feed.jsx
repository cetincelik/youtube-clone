import { useContext } from "react"
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";
import  { VideoContext } from "../context/videoContext";


const Feed = () => {
    const { videos, error, isLoding } = useContext(VideoContext);


  return (
    <div className="flex">
      <Sidebar />
      
      <div className="videos">
        {isLoding ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                < Card video={item} key={item.videoId} />
              )
          )
        )
      }
      </div>
    </div>
  )
}

export default Feed;