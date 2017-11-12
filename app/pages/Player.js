import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Player.scss';

class Player extends React.Component {
  render() {
    return (
      <div className={styles.playerDetailContainer}>
        <div className={styles.playerDetail}>
          <Link className={styles.detailLink} to={`${this.props.path}/${this.props.id}`}>
            <div className={styles.imgContainer}>
              <img className="img-responsive" src={require('images/jc.jpg')} />
            </div>

              <p className={styles.playerName}>{this.props.name}</p>
              <p>{this.props.level}</p>
          
          </Link>
        </div>
      </div>
    );
  }
}

export default Player;
