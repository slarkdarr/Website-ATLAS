import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Events from './pages/Events'
import News from './pages/News'
import Shop from './pages/Shop'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ScrollToTop>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
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
      </ScrollToTop>
    </Router>
  );
}