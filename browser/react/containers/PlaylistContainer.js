import React from 'react';
import Playlist from '../components/Playlist';

export default class extends React.Component {
  constructor(props) {
    super();

    this.state = {
      playlistName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitPlaylist = this.submitPlaylist.bind(this);
  }

  handleChange(event) {
    this.setState({
      playlistName: event.target.value
    });
  }

  submitPlaylist(event) {
    event.preventDefault();
    console.log(this.state.playlistName);
  }

  render() {
    return(
      <div>
        <Playlist handleChange={this.handleChange} submitPlaylist={this.submitPlaylist} />
      </div>
    );
  }
}