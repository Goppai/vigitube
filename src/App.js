import React, { Component } from 'react'
import { Row, Icon } from 'antd'
import { SearchBar, VideoView, VideoList, Footer } from './components'
import { search } from './utilities/functions'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    search().then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const { videos, selectedVideo } = this.state
    return (
      <Row className='width-100'>
        <SearchBar
          search={query => search(query)
            .then(videos => this.setState({
              videos,
              selectedVideo: videos[0]
            }))
          }
        />
        {selectedVideo && <VideoView selectedVideo={selectedVideo}/>}
        {videos && <VideoList selectVideo={selectedVideo => this.setState({ selectedVideo })} videos={videos}/>}
        <Footer>
          <span>Powered by <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><Icon type='youtube'/></a></span>
        </Footer>
      </Row>
    )
  }
}

export default App
