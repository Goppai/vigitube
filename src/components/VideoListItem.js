import React from 'react'
import { List } from 'antd'

const { Item } = List
const { Meta } = Item

export const VideoListItem = ({ item, onClick }) => <Item
  className='video-list-item'
  onClick={onClick}
  extra={<img width={100} src={item.snippet.thumbnails.default.url} alt='video-thumbnail'/>}
>
  <Meta
    title={item.snippet.title}
  />
</Item>
