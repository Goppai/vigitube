import React from 'react'
import { Layout, Col } from 'antd'

export const Footer = ({ children }) => <Col xs={24} className='center-text footer'>
  <Layout.Footer>
    {children}
  </Layout.Footer>
</Col>
