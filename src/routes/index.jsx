import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './AppContext'
import { useInitialState } from './useInitialState'
import { MyOrder } from '../pages/MyOrder'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import './index.css'

export function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/'>
              <Route path='category/:category' element={<Home />} />
              <Route index element={<Home />} />
            </Route>
            <Route path='/my-order' element={<MyOrder />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
