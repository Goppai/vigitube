import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { VideoList } from './'

describe('<VideoList/>', () => {
  const wrapper = shallow(<VideoList/>)

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
