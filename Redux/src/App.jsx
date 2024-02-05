import Login from './components/Login'
import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-green-700'>React Redux</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
