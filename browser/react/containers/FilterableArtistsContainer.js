import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class extends React.Component{
  constructor(props){
    super();
    this.state = {
      artists: props.artists,
      filteredArtists: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({artists: newProps.artists, filteredArtists: newProps.artists});
  }

  handleChange(event){
    this.setState({filteredArtists: this.state.artists.filter(artist => {
      return artist.name.toLowerCase().match(event.target.value.toLowerCase());
    })});
  }

  render(){
    return(
      <div>
        <FilterInput formData={this.state.formVal} handleChange={this.handleChange} />
        <Artists artists={this.state.filteredArtists} />
      </div>
    );
  }
}
