import './css/App.css'
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artistes from "./pages/Artistes";
import Editions from "./pages/Editions";
import Expositions from "./pages/Expositions";
import Actualites from "./pages/Actualites";
import Galerie from "./pages/Galerie";

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
          <Route path="/galerie">
            <Galerie />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
