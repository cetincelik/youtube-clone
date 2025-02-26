# 📺 YouTube Clone

Bu proje, YouTube'un temel işlevselliğini taklit eden bir React uygulamasıdır. **react-icons**, **react-router-dom**, **axios**, **react-player**, **moment** ve **tailwind** gibi popüler kütüphaneler kullanılarak geliştirilmiştir.

---

## 🚀 Özellikler

- **Video Arama**: YouTube API'si kullanılarak video araması yapılır.
- **Video İzleme**: Seçilen video react-player ile oynatılır.
- **Yorumlar ve Detaylar**: Video açıklamaları ve yorumlar gösterilir.
- **Responsive Tasarım**: Tailwind CSS ile tüm cihazlarda uyumlu bir görünüm.

---

## 📸 Önizleme

Aşağıda, uygulamanın nasıl çalıştığını gösteren bir GIF bulunmaktadır:

![YouTube Clone](./src/assets/demo.gif)

> **Not**: `demo.gif` dosyasını `src/assets` klasörüne koymayı unutma!

---

## 🛠️ Kullanılan Teknolojiler ve Kütüphaneler

- **React** - UI oluşturmak için.
- **react-router-dom** - Sayfalar arası geçiş.
- **axios** - API isteklerini yönetmek için.
- **react-player** - Video oynatma.
- **moment** - Zaman formatlama (örneğin: `2m` olarak gösterim).
- **tailwind** - Hızlı ve özelleştirilebilir stil yapısı.

---








<!-- # Kütüphaneler

- react-icons
- react-router-dom
- axios
- react-player (video oynatma)
- moment (zaman formatla) 200000000 > 2m
- tailwind (kurulum sitesinden)

 # Search İçin 2. Çözüm

 ```js
 let params = {
    query,
    type: "video",
 };

 useEffect(() => {
    setIsLoading(true);
    setPage(1);
    api
      .get("/search", { params })
      .then((res) => {
        setResults(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
 }, [query]);

 const handleClick = () => {
    setSpinnerLoading(true);
    setPage(page + 1);
    params = { ...params, token };
    api
       .get("/search", { params })
       .then((res) => {
        setResults([...results, ...res.data.data]);
        setToken(res.data.continuation);
       })
       .catch((err) => console.log(err))
       .finally(() => setSpinnerLoading(false));
 };
 
 ``` -->


