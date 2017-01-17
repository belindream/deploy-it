import React from 'react'
import { Login } from '../Login'

describe('Login', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <Login />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
