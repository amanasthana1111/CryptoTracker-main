import { useState, useEffect } from "react";
import Card from "./Card";
const Body = () => {
  const [coins, setCoins] = useState([]);
  

  useEffect(() => {
    const fetchTrending = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await res.json();
      const top4 = data.coins.slice(0, 4).map((c) => c.item);
      
      setCoins(top4);
    };

    fetchTrending();
  }, []);
  
  return (
    <div className="body1">
      <h1>
        Track All Your Crypto <br />& Tokens From One Place
      </h1>
      <h4>View real-time prices and in-depth crypto charts.</h4>
      <div className="card">
        {console.log(coins)}
        {coins.map((value) => {
  return (
    <Card
      key={value?.id}
      name={value?.name}
      price={value?.data?.price.toFixed(3) || "N/A"}
      image={value?.large}
    />
  );
})}
      </div>
    </div>
  );
};

export default Body;
