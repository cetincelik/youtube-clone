## 📺 YouTube Clone 🚀

Bu proje, YouTube'un temel işlevselliğini taklit eden bir React uygulamasıdır. **react-icons**, **react-router-dom**, **axios**, **react-player**, **moment** ve **tailwind** gibi popüler kütüphaneler kullanılarak geliştirilmiştir.

---

## 🚀 Özellikler

- **Video Arama**: YouTube API'si kullanılarak video araması yapılır.
- **Video İzleme**: Seçilen video react-player ile oynatılır.
- **Yorumlar ve Detaylar**: Video açıklamaları ve yorumlar gösterilir.
- **Responsive Tasarım**: Tailwind CSS ile tüm cihazlarda uyumlu bir görünüm.
- **Yüklenme Durumu**: Arama ve video yüklenirken yüklenme göstergesi.
- **Hata Yönetimi**: API istekleri sırasında oluşabilecek hataların yönetimi.

---

## 📸 Önizleme

Aşağıda, uygulamanın nasıl çalıştığını gösteren bir video bulunmaktadır:

![YouTube Clone](./src/assets/demo.mkv)

> **Not**: `demo.mkv` dosyasını `src/assets` klasörüne koymayı unutma!

---

## 🛠️ Kullanılan Teknolojiler ve Kütüphaneler

- **React** - UI oluşturmak için.
- **react-router-dom** - Sayfalar arası geçiş.
- **axios** - API isteklerini yönetmek için.
- **react-player** - Video oynatma.
- **moment** - Zaman formatlama (örneğin: `2m` olarak gösterim).
- **tailwind** - Hızlı ve özelleştirilebilir stil yapısı.
- **react-icons** - Popüler ikon kütüphanesi.

---

## 🔍 Alternatif Arama Çözümü

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
```
