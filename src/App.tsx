import Blog from "./modules/Blog";
import Home from "./modules/Home";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"HomeKey"} path="/" element={<Home />} />
        <Route key={"BlogKey"} path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
