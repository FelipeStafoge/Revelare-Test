import Blog from "./modules/Blog";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./modules/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
