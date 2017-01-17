import React from 'react'
import { Loader } from '../Loader'

describe('Loader', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <Loader />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
