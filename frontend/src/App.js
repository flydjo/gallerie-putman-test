import './css/App.css'
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artistes from "./pages/Artistes";
import Editions from "./pages/Editions";
import Expositions from "./pages/Expositions";
import Actualites from "./pages/Actualites";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/artistes">
            <Artistes />
          </Route>
          <Route path="/editions">
            <Editions />
          </Route>
          <Route path="/expositions">
            <Expositions />
          </Route>
          <Route path="/actualites">
            <Actualites />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
