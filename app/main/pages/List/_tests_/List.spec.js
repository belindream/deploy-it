import React from 'react'
import { List } from '../List'

describe('List', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <List />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
