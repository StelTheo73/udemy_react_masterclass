import { Routes, Route } from "react-router-dom";

import { Admin } from "./components/Admin";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./components/PageNotFound";
import { ProductDetail } from "./components/ProductDetail";
import { ProductList } from "./components/ProductList";

import "./static/css/App.css";

function App() {
  const user = false;

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="admin" element={user ? <Admin/> : <PageNotFound/>}></Route>
          <Route path="products" element={<ProductList/>}></Route>
          <Route path="products/:name/:id" element={<ProductDetail/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}
export {App};
