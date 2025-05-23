import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routes/router'
import { Provider } from 'react-redux'
import { store } from './Store'

function App() {

  return (
    <>
    <Provider store = {store}>
    <RouterProvider router = {createBrowserRouter(router)}/>
    </Provider>
    </>
  )
}

export default App
