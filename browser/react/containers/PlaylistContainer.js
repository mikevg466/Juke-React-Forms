import React from 'react';
import Playlist from '../components/Playlist';
import axios from 'axios';

export default class extends React.Component {
  constructor(props) {
    super();

    this.state = {
      playlistName: '',
      isDisabled: false,
      validationStyle: 'hidden'
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitPlaylist = this.submitPlaylist.bind(this);
    this.addPlaylist = props.addPlaylist;
  }

  handleChange(event) {

    const targetValue = event.target.value;

    if (targetValue.length === 0) {
      this.setState({
        validationStyle: 'visible',
        playlistName: targetValue,
        isDisabled: false
      });
    }
    else if (targetValue.length <= 16) {
      this.setState({
        validationStyle: 'hidden',
        playlistName: targetValue,
        isDisabled: false
      });
    }
    else {
      this.setState({
        validationStyle: 'hidden',
        playlistName: targetValue,
        isDisabled: true
      })
    }
  }

  submitPlaylist(event) {
    event.preventDefault();
    this.addPlaylist(this.state.playlistName);
    this.setState({ playlistName: '' });
  }

  render() {
    return(
      <div>
        <Playlist value={this.state.playlistName} handleChange={this.handleChange} submitPlaylist={this.submitPlaylist} isDisabled = {this.state.isDisabled} validationStyle = {this.state.validationStyle}/>
      </div>
    );
  }
}
