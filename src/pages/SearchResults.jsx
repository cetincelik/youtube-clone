import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import Card from "../components/Card";
import Loader from "../components/Loader";


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isLoding, setIsLoding] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [page, setPage] = useState(1);

  // 1) urlden aratılan terimi al
  const query = searchParams.get("search_query");

  // 2) api'den aratılan terime uygun verileri useEffect ile al
  useEffect(() => {
    setIsLoding(true);

    let params = {
      query,
      type: "video",
      // eğerki sayfa 1'den fazlaysa yapılan api isteğine token'ıda ekliyoruz
      // bu sayede sayfaların verileni alıyoruz
      token: page > 1 ? token : undefined,
    };

    api
     .get("/search", { params })
     .then((res) => {
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res.data.next_page_token);
     })
     .catch((err) => console.log(err))
     .finally(() => setIsLoding(false));
  }, [query, page]);

  // 3) eğer yeni bir şey aratılrsa önceki datayı sil
  useEffect(() => {
    setData([]);
    setToken(null);
    setPage(1);
  }, [query]);

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[90vh] overflow-y-auto">
      <h2 className="text-xl mb-5">
        <span className="font-bold">{query}</span> için sonuçlar
      </h2>

      <div className="flex flex-col gap-5 justify-center">
        {data.map(
          (item) =>
          item.type === "video" && (
            <Card key={item.videoId} video={item} isRow />
          )
        )}

        {isLoding && <Loader spinner />}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setPage(page + 1)}
          disabled={isLoding}
          className={`bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition ${
           isLoding ? "hidden" : "" 
          }`}
          >
            Daha Fazla
          </button>
      </div>
    </div>
  );

};
export default SearchResults;