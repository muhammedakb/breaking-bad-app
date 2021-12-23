import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Character</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:char_id" element={<Detail />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
