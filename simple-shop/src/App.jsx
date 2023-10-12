import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import "./static/css/App.css";

function App() {
  const username = "StelTheo73";

  return (
    <div className="App">
      <Header/>
      <h1 className="active">Hello {username}!</h1>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export {App};
