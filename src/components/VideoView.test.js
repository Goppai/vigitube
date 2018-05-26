import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { InnerView as VideoView } from './'

describe('<VideoView/>', () => {
  const dummyProps = {
    selectedVideo: {
      id: {
        videoId: 'test-id'
      },
      snippet: {
        title: 'Test-title',
        description: 'Test-description'
      }
    },
    size: {
      width: 640
    }
  }
  const wrapper = shallow(<VideoView {...dummyProps}/>)

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders youtube iframe', () => {
    expect(wrapper.find('iframe').length).toBe(1)
  })

  it('renders video details', () => {
    expect(wrapper.find('.video-details').length).toBe(1)
  })
})
