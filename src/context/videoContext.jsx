import { createContext, useEffect, useState } from 'react';
import api from './../utils/api';
import { categories } from './../utils/constants';


export const VideoContext = createContext();

export const VideoProvider = ( children ) => {
    const [category, setCategory] = useState(categories[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [videos, setVideos] = useState();


    useEffect(() => {
        let type = category.type;

        // seçilen kategori menu tipindeyse fonk. durdur
        if (type === "menu") return;

        // istek atılacak url'i belirle
        const url =
            type === "home"
            ? "/home"
            : type === "trending"
            ? "/trending"
            : `/search?query=${category.name}`;
         
        // yüklenme state'ini true'ya çek
        setIsLoading(true);

        console.log("api isteği");

        // api isteği at
        api
         .get(url)
         .then((res) => setVideos(res.data.data))
         .catch((err) => setError(err.message))
         .finally(() => setIsLoading(false));
    }, [category]);

  return (
    <VideoContext.Provider
     value={{isLoading, error, videos, category, setCategory }}
    >
        {children}
    </VideoContext.Provider>
  );
};

