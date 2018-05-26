import React from 'react'
import sizeMe from 'react-sizeme'
import { Col, Card } from 'antd'

const { Meta } = Card

export const InnerView = ({ size, selectedVideo }) => <Col xs={24} lg={17} className='video-view'>
  <iframe
    className='width-100'
    style={{ height: size.width * 9 / 16 }}
    title='video-player'
    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?rel=0`}
    frameBorder={0}
    allowFullScreen
  />
  <Card className='video-details' title={selectedVideo.snippet.title}>
    <Meta
      title={selectedVideo.snippet.channelTitle}
      description={selectedVideo.snippet.description}
    />
  </Card>
</Col>

export const VideoView = sizeMe()(InnerView)
