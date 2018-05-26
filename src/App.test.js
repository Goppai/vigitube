import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

describe('<App/>', () => {
  const wrapper = shallow(<App/>)

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('has intial state set correctly', () => {
    expect(wrapper.state().videos.length).toBe(0)
    expect(wrapper.state().selectedVideo).toBeNull()
  })
})
