import React from "react";
import { Route, withRouter, Switch, Redirect /*BrowserRouter as Router,*/ } from 'react-router-dom';

import c from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <Route exact path='/players' component={c.PlayersCollection} />
      </div>
    );
  }
}

export default withRouter(App);
