import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player/youtube";
import Channel from "./Channel";
import Description from "./Description";
import Comments from "./Comments";
import Card from "../../components/Card";


const Detail = () => {
  const [video, setVideo] = useState(null);

  // 1) arama parametreleri için kurulum
  const [searchParams] = useSearchParams();

  // 2) url'den "v" isimli paremetreye eriş
  const id = searchParams.get("v");

  // 3) video id'sine göre video bilgilerini api'dan al
  useEffect(() => {
    const params = {id, extend: 1};

    api
      .get(`/video/info`, {params})
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto">
      {/* sayfa içeriği */}
      <div>
        {/* video */}
        <div className="h-[50vh] lg:h-[60vh] rounded overflow-hidden">
          <ReactPlayer
            muted={true}
            playing={true}
            height={"100%"}
            width={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>

        {/* açıklamalar */}
        {video && (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* kanal bilgileri */}
            <Channel video={video} />

             {/* video bilgileri */}
             <Description video={video} />

              {/* yorumlar */}
            <Comments videoId={id} />
          </>
        )}
      </div>

      {/* alakalı içerikler */}
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
             <Card video={item} key={item.videoId} isRow />
            )
        )}
      </div>
    </div> 
  );
};

export default Detail;