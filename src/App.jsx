import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
