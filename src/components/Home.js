import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = props =>
  <div className="home">
    <div>
      <h1 itemProp="headline">Koubru First Demo</h1>
      <p>Please specify a topic to start the debate.</p>
      <input type="text" name="room" value={ props.roomId } onChange={props.handleChange} pattern="^\w+$" maxLength="255" required autoFocus title="Room name should only contain letters or numbers."/>
      <Link className="primary-button" to={ '/r/' + props.roomId }>Create/Join Topic</Link>
      { props.rooms.length !== 0 && <div>Recently created topics:</div> }
      { props.rooms.map(room => <Link key={room} className="recent-room" to={ '/r/' + room }>{ room }</Link>) }
    </div>
  </div>;

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultRoomId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired
};

const mapStateToProps = store => ({rooms: store.rooms});

export default connect(mapStateToProps)(Home);
