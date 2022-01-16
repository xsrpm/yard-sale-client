import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateAccount } from '../components/CreateAccount'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { MyAccount } from '../components/MyAccount'
import { MyAccountEdit } from '../components/MyAccountEdit'
import { MyOrder } from '../components/MyOrder'
import { MyOrders } from '../components/MyOrders'
import { NewPassword } from '../components/NewPassword'
import { PasswordRecovery } from '../components/PasswordRecovery'
import { AppContext } from './AppContext'
import { useInitialState } from './useInitialState'
import './index.css'

export function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='category/:category' element={<Home />} />
            <Route index element={<Home />} />
          </Route>
          <Route path='/my-order' element={<MyOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
