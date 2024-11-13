
import React, { useState } from 'react';

export default function AuthForm() {
    const [islogin, setIsLogin] = useState(true);
    
    return (
        <div>
            <div className='container'>
                <div className='form-container'>
                    <div className='form-toggle'>
                        <button className={islogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
                        <button className={!islogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
                    </div>
                    
                    {islogin ? (
                        <div className="form">
                            <h2>Login Form</h2>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" /><br/>
                            <a href='#'>Forgot Password?</a><br/><br/>
                            <button className='b'>Login</button>
                            <p>Not a member? <a href='#'  onClick={()=> setIsLogin(false)}>SignUp now</a></p>
                        </div>
                    ) : (
                        <div className="form">
                            <h2>SignUp Form</h2>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" /><br/>
                            <button>Sign Up</button>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
