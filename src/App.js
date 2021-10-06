import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./viewComponents/Home";
import MenuTables from "./viewComponents/MenuTables";
import Menu from "./viewComponents/Menu";
import Cuisine from "./viewComponents/Cuisine";
import PaidOut from "./viewComponents/PaidOut";
import Tables from "./viewComponents/Tables";
import NewTable from "./viewComponents/NewTable";
import NotFound from './viewComponents/NotFound';

function App() {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  return (
    <Router>
      <div className='m-0 vh-100 container-fluid  bg-dark bg-gradient text-white'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/menuTables'>
            <MenuTables newClientHandler={setClient} newTableClient={setTable}/>
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
            <NewTable client={client} table={table}/>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
