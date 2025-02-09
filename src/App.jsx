import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import { VideoProvider } from "./context/videoContext";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <VideoProvider>
              <Feed />
            </VideoProvider>
          }
          />
          <Route path="/watch" element={<Detail />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>    
    </BrowserRouter>
  );
};

export default App;