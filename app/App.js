import React from "react";
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import c from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <Route exact path='/' component={c.PlayersCollection} />
        <Route exact path='/teams' component={c.Teams} />
      </div>
    );
  }
}

export default withRouter(App);
