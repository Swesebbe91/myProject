import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./pages/Components/Layout/Layout";
import Home from "./pages/Home";
import Information from "./pages/Information";
import About from "./About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

export const countContext = createContext();
export const formContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const[form, setForm] = useState([]);
  return (
    <div className="App">
      <formContext.Provider value={[form, setForm]}>
      <countContext.Provider value={[count, setCount]}>
      
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </countContext.Provider>
      </formContext.Provider>
    </div>
  );
}

export default App;
