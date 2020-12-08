import './css/App.css'
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artistes from "./pages/Artistes";

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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
