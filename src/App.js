import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
// import CustomModal from './CustomModal';

const API_KEY = 'AIzaSyCgoeuaHAXVtwL8_eAn6r6XzU7N8lMLwRw';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selected: null,
      // showModal: true
    };

    this.videoSearch('');
  }

  videoSearch = term => {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selected: videos[0]
      });
      console.log('state', this.state.videos, this.state.selected);
    });
  }

  closeModal = () => this.setState({ showModal: false })

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 200);

    return (
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetails video={this.state.selected}/>
        <VideoList
          videos={this.state.videos}
          selectVideo={selected => this.setState({ selected })}
        />
        <footer>
          powered by <a href='https://www.youtube.com'>youtube</a>
        </footer>
        {/* {
          this.state.showModal ?
          <CustomModal closeModal={this.closeModal}/> :
          null
        } */}
      </div>
    );
  }
}
