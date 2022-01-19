import React, {useState} from 'react';
import RegisterForm from '../../components/auth/register';
import LoginForm from '../../components/auth/login';


const AuthPage = () =>{
    const [status,setStatus] = useState('Register')

    return(
        <div>
            {status ==='Register' ?
                (<RegisterForm setStatus={(value) => setStatus(value)}/>) : (<LoginForm/>)               
            }

        </div>
    );
}

export default AuthPage;