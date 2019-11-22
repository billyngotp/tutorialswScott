import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import './App.css';
import News from "./components/News"
import Games from "./components/Games"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Practice with Fragmenets*/}
        <> </>

        <Router>
          <div>
            Hello
          </div>
          <Link to = "/"> News!</Link>
          <Link to = "/games"> Games </Link>
          <Switch>
            <Route exact path = "/">
              <News />
            </Route>
            <Route exact path = "/games">
              <Games/>
            </Route>

          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
