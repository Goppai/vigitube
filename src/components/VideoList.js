import React from 'react'
import { Col, List } from 'antd'
import { VideoListItem } from './'

export const VideoList = ({ videos, selectVideo }) => <Col xs={24} lg={7} className='video-list'>
  <List
    itemLayout='vertical'
    dataSource={videos}
    renderItem={item => <VideoListItem onClick={() => selectVideo(item)} item={item}/>}
  />
</Col>
