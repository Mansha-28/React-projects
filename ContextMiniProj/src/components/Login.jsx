import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)

    const handleChange = (e) => {
        e.preventDefault();

        setUser({username, password})
        console.log("form submitted")
    }

  return (
    <div className='p-5 w-72 m-auto my-5 bg-gray-400 text-center'>
        <h2 className='text-xl'>Login</h2>
 
        <div className='flex flex-col'>
            <input className='m-5 outline-none border-black border-2 p-3 rounded w-48' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'  />
            <input className='m-5 outline-none border-black border-2 p-3 rounded w-48' type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button className='bg-blue-500 rounded p-2 w-48 m-5 items-center text-center' onClick={handleChange}>Submit</button>
        </div>

    </div>
  )
}

export default Login