import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <a href='#'><span id='logo-first'>vigi</span><span id='logo-second'>tube</span></a>
        <input onChange={event => this.props.onSearch(event.target.value)} placeholder='Search' />
      </div>
    );
  }
}
