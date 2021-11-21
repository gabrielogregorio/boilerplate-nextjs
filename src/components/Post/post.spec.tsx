import React from 'react'
import renderer from 'react-test-renderer'
import { Post } from '.'

it('renders post', () => {
  const tree = renderer.create(<Post />)
  expect(tree).toMatchSnapshot()
})
