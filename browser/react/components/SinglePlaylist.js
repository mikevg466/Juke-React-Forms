import React from 'react';
import Songs from './Songs';


export default class extends React.Component{
  componentDidMount(){
    this.props.selectPlaylist(this.props.params.playlistId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.params.playlistId !== newProps.params.playlistId){
      this.props.selectPlaylist(newProps.params.playlistId);
    }
  }

  render(){
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} />
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}
