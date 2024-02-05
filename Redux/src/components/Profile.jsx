import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function  Profile() {

    const { user } = useContext(UserContext);
    
    if(!user) return <div className='text-center'>please login</div>
    
    return <div  className='text-center'>Welcome {user.username}</div>
}