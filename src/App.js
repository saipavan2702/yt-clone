import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/videos" element={<WatchVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
