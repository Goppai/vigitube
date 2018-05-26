import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { SearchBar } from './'

describe('<SearchBar/>', () => {
  const search = jest.fn()
  const wrapper = shallow(<SearchBar search={search}/>)

  it('renders', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders input', () => {
    expect(wrapper.find('.search-input').length).toBe(1)
  })

  it('handles input change', () => {
    const input = wrapper.find('.search-input')
    input.simulate('change', { target: { value: 'testing' } })
    expect(search).toHaveBeenCalled()
  })
})
