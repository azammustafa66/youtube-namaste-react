import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";
import Navbar from "./components/Layout/Navbar";
import SearchFeed from "./components/SearchFeed";
import Sidebar from "./components/Layout/SideBar";
import WatchPage from "./components/WatchPage";

const App = () => {
  return (
    <main className="h-screen w-full">
      <Router>
        <Navbar />
        <div className="flex mt-5">
          <div className="min-w-fit">
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
              <Route path="/watch" element={<WatchPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </main>
  );
};

export default App;
