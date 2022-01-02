import React, {useState} from 'react';
import RegisterForm from '../../components/auth/register';
import LoginForm from '../../components/auth/login';


const AuthPage = () =>{
    const [status,setStatus] = useState(false)

    return(
        <div>
            {!status ?
                (<RegisterForm setStatus={(e) => setStatus(e)}/>) : (<LoginForm/>)               
            }
            
        </div>
    );
}

export default AuthPage;