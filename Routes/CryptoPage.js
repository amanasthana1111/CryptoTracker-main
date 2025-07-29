import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../src/Loader";

const CryptoPage = () => {
  const [data, setData] = useState([]);
  const [loading , setLoader] = useState(true)

  const CryptoData = useParams();
  useEffect(() => {
    async function crypto() {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${CryptoData.name}`
      );
      const json = await res.json();
       setLoader(false)
      setData(json);

      //   const topCoins = json.coins.map((coin) => coin.item);
      //   setDummb(topCoins);
    }
    crypto();
  }, []);

   if(loading){
     return( <Loader></Loader>)
    }

  return (
    <div className="crypto-container">
  <div className="crypto-header">
    <img src={data.image?.large} alt={data.name} />
    <div>
      <div className="crypto-title">
        {data.name} <span className="crypto-symbol">({data.symbol?.toUpperCase()})</span>
      </div>
    </div>
  </div>

  <p className="crypto-description">{data.description?.en}.</p>

  <div className="crypto-links">
    <a href={data.links?.homepage[0]} className="crypto-link" target="_blank" rel="noreferrer">🌐 Official Website</a>
    <a href={data.links?.chat_url[0]} className="crypto-link" target="_blank" rel="noreferrer">💬 Community Chat</a>
    <a href={data.links?.twitter_screen_name ? `https://twitter.com/${data.links.twitter_screen_name}` : "#"} className="crypto-link" target="_blank" rel="noreferrer">🐦 Twitter</a>
    <a href={data.links?.repos_url?.github[0]} className="crypto-link" target="_blank" rel="noreferrer">🛠 GitHub</a>
    <a href={data.links?.blockchain_site[0]} className="crypto-link" target="_blank" rel="noreferrer">🔗 Explorer</a>
  </div>

  <div className="market-section">
    <div className="market-title">Market Data</div>
    <ul className="market-data">
      <li><strong>Current Price:</strong> ${data.market_data?.current_price?.usd?.toLocaleString()}</li>
      <li><strong>Market Cap Rank:</strong> #{data.market_data?.market_cap_rank}</li>
      <li><strong>Market Cap:</strong> ${data.market_data?.market_cap?.usd?.toLocaleString()}</li>
      <li><strong>Circulating Supply:</strong> {data.market_data?.circulating_supply?.toLocaleString()}</li>
      <li><strong>Total Supply:</strong> {data.market_data?.total_supply?.toLocaleString()}</li>
      <li><strong>All Time High:</strong> ${data.market_data?.ath?.usd?.toFixed(2)}</li>
      <li><strong>All Time Low:</strong> ${data.market_data?.atl?.usd?.toFixed(2)}</li>
      <li><strong>Price Change (24h):</strong> {data.market_data?.price_change_percentage_24h?.toFixed(2)}%</li>
      <li><strong>Genesis Date:</strong> {data.genesis_date || "N/A"}</li>
      <li><strong>Watchlist Count:</strong> {data.watchlist_portfolio_users?.toLocaleString()}</li>
      
    </ul>
  </div>
</div>

  );
};

export default CryptoPage;
