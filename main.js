import ReactDom from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router";
import { Home } from "./src/Home";
import Header from './src/Header'
import CryptoPage from "./Routes/CryptoPage";
import Watchlist from "./Routes/Watchlist";
import { News } from "./Routes/News";
import About from "./Routes/About";

import Cryptocurrencies from "./Routes/Cryptocurrencies.JS";
import Footer from "./src/Footer";

const App = () => {
  return <>
  <BrowserRouter>
  <Header></Header>
      <Routes>
        
        <Route path="/" element={<Home />} />
         <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
         <Route path="/crypto/:name" element={<CryptoPage />} />
         <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      
            
          
      <Footer></Footer>
    </BrowserRouter>
 
  
  </>;
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<App></App>);
