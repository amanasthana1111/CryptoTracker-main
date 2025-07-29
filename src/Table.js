import { useState  , useEffect } from "react";

const Table = () => {
    const [dummyData , setDummb] = useState([]);
    useEffect(() => {
        const fetchTrending = async () => {
          const res = await fetch(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          const data = await res.json();
          const top4 = data.coins.slice(4, 14).map((c) => c.item);
          setDummb(top4);
        };
    
        fetchTrending();
      }, []);
      
  return (
    <div className="table-container">
      <div className="table-header">
        <div></div>
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>24h Change</div>
        <div>Price Graph (7d)</div>
      </div>
      {console.log(dummyData)}
      {dummyData.map((coin,index) => ( 
        <div className="table-row" key={coin.coin_id}>
            <h4 style={{fontSize : "20px"}}>☆</h4>
          <div>{index}</div>
          <div className="coin">
            <img src={coin.large} alt={coin.name} />
            <span>
              <strong>{coin.name}</strong> · {coin.symbol}
            </span>
          </div>
          <div >{coin?.data?.price.toFixed(3)}</div>
          <div>
            <span className="DATA">
                <h5>{coin.data.price_change_percentage_24h.usd.toFixed(4)}</h5>
               {coin.data.price_change_percentage_24h.usd.toFixed(4) >0 ? <h4 style={{color: "green"}}>▲</h4>:<h4 style={{color: "red"}}>▼</h4>}
            </span>
          </div>
          <div className="chartimg">
            <img src={coin?.data.sparkline}></img>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Table;