import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useInitialState } from './useInitialState'
import { MyOrder } from '../pages/MyOrder'
import { MyOrders } from '../pages/MyOrders'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import './index.css'
import { MyAccount } from '../pages/MyAccount'
import { MyAccountEdit } from '../pages/MyAccountEdit'
import { AppContext } from '../AppContext'
import { Login } from '../pages/Login'

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
            <Route path='order' element={<MyOrder />}>
              <Route path=':id' element={<MyOrder />} />
            </Route>
            <Route path='orders' element={<MyOrders />}></Route>
            <Route path='account/edit' element={<MyAccountEdit />}></Route>
            <Route path='account' element={<MyAccount />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
