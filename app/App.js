import React from "react";
import { Route, withRouter, Switch, Redirect /*BrowserRouter as Router,*/ } from 'react-router-dom';

import c from './pages';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid wrapper">
          <Route exact path='/players' component={c.Collection} />
          <Route exact path='/players/:playerId' component={c.Edit} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
