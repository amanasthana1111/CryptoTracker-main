import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../src/Loader";

function Cryptocurrencies() {
  const [dummyData, setDummb] = useState([]);
  const [flag, setFlag] = useState(true);
  const [loading , setLoader] = useState(true)

    

  useEffect(() => {
    async function crypto() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const json = await res.json();
      // Limit to 4 items and extract only the 'item' object
      const topCoins = json.coins.map((coin) => coin.item);
      setLoader(false)
      setDummb(topCoins);
    }
    crypto();
  }, []);
  function sorting() {
    const sortedData = [...dummyData].sort((a, b) =>
      flag ? a.data.price - b.data.price : b.data.price - a.data.price
    );
    setDummb(sortedData);
    setFlag(!flag);
  }
  if(loading){
   return( <Loader></Loader>)
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <div></div>
        <div>#</div>
        <div>Name</div>
        <div style={{ cursor: "pointer" }} onClick={sorting}>
          {flag ? <h4>Price ▲ </h4> : <h4>Price ▼ </h4>}
        </div>
        <div>24h Change</div>
        <div>Price Graph (7d)</div>
      </div>
      {dummyData.map((coin, index) => (
        <div className="table-row" key={coin.coin_id}>
          <h4 style={{ fontSize: "20px", cursor: "pointer" }}>☆</h4>

          <div>{index + 1}</div>

          <div className="coin">
            <img src={coin.large} alt={coin.name} />
            <span>
              <strong><Link className="crypto-link" to={`/crypto/${coin.id}`}>{coin.name}</Link></strong> · {coin?.symbol}
            </span>
          </div>

          <div>{coin?.data?.price ? coin.data.price.toFixed(3) : "N/A"}</div>

          <div>
            {coin?.data?.price_change_percentage_24h?.usd !== undefined ? (
              <span className="DATA">
                <h5>{coin.data.price_change_percentage_24h.usd.toFixed(4)}%</h5>
                <h4
                  style={{
                    color:
                      coin.data.price_change_percentage_24h.usd > 0
                        ? "green"
                        : "red",
                  }}
                >
                  {coin.data.price_change_percentage_24h.usd > 0 ? "▲" : "▼"}
                </h4>
              </span>
            ) : (
              "N/A"
            )}
          </div>

          <div className="chartimg">
            {coin?.data?.sparkline ? (
              <img src={coin.data.sparkline} alt="chart" />
            ) : (
              "N/A"
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cryptocurrencies;
