import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { VideoListItem } from './'

describe('<VideoListItem/>', () => {
  const onClick = jest.fn()
  const dummyItem = {
    snippet: {
      thumbnails: {
        default: {
          url: 'some-url'
        }
      },
      title: 'Some title'
    }
  }
  const wrapper = shallow(<VideoListItem onClick={onClick} item={dummyItem}/>)

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('handles click', () => {
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
