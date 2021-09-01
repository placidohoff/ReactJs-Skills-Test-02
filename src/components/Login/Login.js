import React , { useState } from 'react'
import './Login.css'
import { useStateValue } from '../../StateProvider.js'
import { useHistory } from 'react-router-dom'

function Login(){
    const [{user}, dispatch] = useStateValue();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = (e, type) => {
        if(type === "user"){
            dispatch({
                type:'LOGIN',
                item:{
                    type: 'user'
                }
            })
            history.push('/charts')
        }
    }

    return(
        <div className="login">
            <form>
                <input placeholder="username" type="text" value={username} />

                <input placeholder="password" type="text" value={password} />

                <button type="submit" onClick={e => login(e, 'user')}>User</button>
                
                <button type="submit" onClick={e => login(e, 'artist')}>Artist</button>
            </form>
            
        </div>
    )
}

export default Login