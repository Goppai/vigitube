import React from 'react'
import { Debounce } from 'react-throttle'
import { Col, Input, Icon } from 'antd'

const { Search } = Input

export const SearchBar = ({ search }) => {
  return <Col xs={24} className='search-bar'>
    <a className='vigitube'>
      <span className='vigitube-part-one'>Vigi</span>
      <span className='vigitube-part-two'>Tube</span>
    </a>
    <a href='https://github.com/ViGi-P/vigitube' target='_blank' rel='noopener noreferrer' className='github-repo-link'>
      <Icon type='github'/>
    </a>
    <Debounce time='500' handler='onChange'>
      <Search
        className='search-input'
        placeholder='Search'
        onChange={e => search(e.target.value)}
        onSearch={value => search(value)}
        enterButton
        size='large'
      />
    </Debounce>
  </Col>
}
