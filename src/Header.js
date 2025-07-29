import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
        <h3><Link to="/">CryptoTracker</Link></h3>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
