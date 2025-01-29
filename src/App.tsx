import Blog from "./modules/Blog";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./modules/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"HomeKey"} path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route key={"BlogKey"} path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
