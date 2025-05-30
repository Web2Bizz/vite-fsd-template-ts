import { RouteObject } from 'react-router-dom'
import {
  About,
  Main
} from '@pages'
import Layout from '@layouts'

const { Default } = Layout

export const publicRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Default>
        <Main />
      </Default>
    ),
  },
  {
    path: '/about',
    element: (
      <Default>
        <About />
      </Default>
    ),
  },
  {
    path: '*',
    element: (
      <Default>
        <h1>not found</h1>
      </Default>
    ),
  },
]
