import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./components/Home";
import MenuTables from "./components/MenuTables";
import Menu from "./components/Menu";
import Cuisine from "./components/Cuisine";
import PaidOut from "./components/PaidOut";
import Tables from "./components/Tables";
import NewTable from "./components/NewTable";

function App() {
  return (
    <Router>
      <div className='m-0 vh-100 container-fluid  bg-dark bg-gradient text-white'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/menuTables'>
            <MenuTables />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/cuisine'>
            <Cuisine />
          </Route>
          <Route path='/paid'>
            <PaidOut />
          </Route>
          <Route path='/tables'>
            <Tables />
          </Route>
          <Route path='/newTable'>
            <NewTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
