import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateAccount } from '../components/CreateAccount'
import { Header } from '../components/Header'
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
          <Route
            path='/login'
            element={
              <>
                <Header />
                <Login />
              </>
            }
          ></Route>
          <Route
            path='/new-account'
            element={
              <>
                <Header />
                <CreateAccount />
              </>
            }
          ></Route>
          <Route path='/my-account'>
            <Route
              path='edit'
              element={
                <>
                  <Header />
                  <MyAccountEdit />
                </>
              }
            ></Route>
            <Route
              index
              element={
                <>
                  <Header />
                  <MyAccount />
                </>
              }
            />
          </Route>
          <Route
            path='/my-order'
            element={
              <>
                <Header />
                <MyOrder />
              </>
            }
          ></Route>
          <Route
            path='/my-orders'
            element={
              <>
                <Header />
                <MyOrders />
              </>
            }
          ></Route>
          <Route
            path='/new-password'
            element={
              <>
                <Header />
                <NewPassword />
              </>
            }
          ></Route>
          <Route
            path='/password-recovery'
            element={
              <>
                <Header />
                <PasswordRecovery />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
