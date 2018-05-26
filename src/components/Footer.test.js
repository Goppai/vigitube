import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Footer } from './'

describe('<Footer/>', () => {
  const wrapper = shallow(<Footer>
    <span className='footer-child'>text</span>
  </Footer>)

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders children', () => {
    expect(wrapper.find('.footer-child').length).toBe(1)
  })
})
