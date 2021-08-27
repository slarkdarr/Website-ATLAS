import {
    Link
} from "react-router-dom";

export default function Home() {
    return (
    <div>
      <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </nav>
          <h2>Home</h2>
    </div>
    );
  }