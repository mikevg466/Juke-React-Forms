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
        <div className="well">
          <form className="form-horizontal" noValidate name="songSelect">
          <fieldset>
            <legend>Add to Playlist</legend>
            <div className="form-group">
              <label htmlFor="song" className="col-xs-2 control-label">Song</label>
              <div className="col-xs-10">
                <select className="form-control" name="song">
                  <option value={'1'}>song name</option>
                  <option value={'2'}>another song name</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Add Song</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
