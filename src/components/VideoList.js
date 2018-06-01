import React from 'react'
import { Col, List, Button } from 'antd'
import { VideoListItem } from './'

export const VideoList = ({ videos, selectVideo, loadMore }) => <Col xs={24} lg={7} className='video-list'>
  <List
    itemLayout='vertical'
    dataSource={videos}
    renderItem={item => <VideoListItem onClick={() => selectVideo(item)} item={item}/>}
    loadMore={
      <Button className='load-more-btn' type='primary' onClick={loadMore}>Load More</Button>
    }
  />
</Col>
