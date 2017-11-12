import React from 'react';
import { Link } from 'react-router-dom';

import players from 'store/players.json';
import PlayerDetail from './PlayerDetail';

import styles from './Teams.scss';

class Teams extends React.Component {
  constructor() {
    super();
    this.state = {
      list: players.players,
      invitedPlayer: '',
      value: 0,
      playersFirst: [],
      playersSecond: [],
      complete: false
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    let invited = this.state.list[value];
    this.setState({[name]: invited, value: value})
  };

  addPlayer = (e) => {
    if (this.state.playersFirst.length < 2 && this.state.invitedPlayer) {
      let players = this.state.playersFirst.concat(this.state.invitedPlayer);
      let list = this.state.list.slice();
      delete list[this.state.value];
      this.setState({playersFirst: players, invitedPlayer: '', list: list});
    } else if (this.state.playersSecond.length < 2  && this.state.invitedPlayer) {
      let players = this.state.playersSecond.concat(this.state.invitedPlayer);
      let list = this.state.list.slice();
      delete list[this.state.value];
      this.setState({playersSecond: players, invitedPlayer: '', list: list});
    } else if (this.state.playersFirst.length >= 2  && this.state.playersSecond.length >= 2) {
      this.setState({complete: true});
    }
  };

  selectBox = () =>
    <div className={styles.selectContainer}>
      <select
        className='form-control'
        name='invitedPlayer'
        value={this.state.invitedPlayers}
        onChange={this.handleChange}>
        <option>Invite player</option>
        {this.state.list.slice().map((opt, index) => {
          return (
            <option key={opt.name} value={index}>{opt.name}</option>
          );
        })}
      </select>
      <a className='btn btn-default button' onClick={this.addPlayer}>Invite player</a>
    </div>;

  teams = () =>
    <div className='row'>
      <div className='col-xs-12 col-sm-6'>
        <div className={styles.team}>
          <h3>Team A</h3>
          {this.state.playersFirst.slice().map(player =>
            <PlayerDetail key={player.name} {...player} />
          )}
        </div>
      </div>
      <div className='col-xs-12 col-sm-6'>
        <div className={styles.team}>
          <h3>Team B</h3>
          {this.state.playersSecond.slice().map(player =>
            <PlayerDetail key={player.name} {...player} />
          )}
        </div>
      </div>
    </div>;

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <div className={styles.teamsContainer}>
            {this.selectBox()}
            {this.teams()}
            <div className={styles.center}>
              {this.state.complete &&
                <p>Teams are complete</p>}
              <Link className='btn btn-default button button-play' to='/play'>Play</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
