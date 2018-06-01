import React, { Component } from 'react'
import { Row, Icon } from 'antd'
import { SearchBar, VideoView, VideoList, Footer } from './components'
import { search as youSearch, loadMore } from './utilities/functions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null,
      nextPageToken: '',
      query: ''
    }
  }

  componentDidMount() {
    this.search()
  }

  search = (query = '') => youSearch(query)
  .then(({ items, nextPageToken, query }) => {
    this.setState({
      videos: items,
      selectedVideo: items[0],
      nextPageToken, query
    })
  })

  render() {
    const { videos, selectedVideo, nextPageToken, query } = this.state

    return (
      <Row className='width-100'>
        <SearchBar
          search={this.search}
        />
        {
          selectedVideo && <VideoView selectedVideo={selectedVideo}/>
        }
        {
          videos && <VideoList
            selectVideo={selectedVideo => this.setState({ selectedVideo })}
            videos={videos}
            loadMore={() => loadMore(nextPageToken, query)
              .then(({ items, nextPageToken }) => {
                this.setState({
                  videos: videos.concat(items),
                  nextPageToken
                })
              })
            }
          />
        }
        <Footer>
          <span>Powered by <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><Icon type='youtube'/></a></span>
        </Footer>
      </Row>
    )
  }
}

export default App
