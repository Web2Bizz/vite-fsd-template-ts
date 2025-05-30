import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { publicRouter } from './public'

const RouterApp = () => {
  const router = createBrowserRouter([
    ...publicRouter,
  ])

  return (
    <RouterProvider
      router={router}
    ></RouterProvider>
  )
}

export default RouterApp
