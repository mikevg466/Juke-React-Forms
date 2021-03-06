import React from 'react';

const Playlist = (props) => {
  return (
    <div className="well">
      <form 
        className="form-horizontal"
        onSubmit={props.submitPlaylist}>
      <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input 
            className="form-control" 
            type="text"
            value={props.value}
            onChange={props.handleChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success" disabled={props.isDisabled} >Create Playlist</button>
           <div className="alert alert-warning" style={{visibility: props.validationStyle}} >Please enter a name</div>
        </div>
      </div>
      </fieldset>
      </form>
    </div>
  )
}

export default Playlist;