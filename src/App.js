import Events from './pages/Events'
import News from './pages/News'
import Shop from './pages/Shop'
import Home from './pages/Home'
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}