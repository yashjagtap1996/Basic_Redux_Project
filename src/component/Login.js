import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../action/action';

const Login = () => {

    const Data=useSelector((state)=>state.LoginLogout.show)
    const dispatch=useDispatch();   

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                      <h1>Login</h1>
                      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                          <button onClick={() => dispatch(login())} type="button" class="btn btn-primary">Login</button>
                          <button onClick={() => dispatch(logout())} type="button" class="btn btn-secondary">Logout</button>
                      </div>
                      {
                          Data && <h1>You Are Successfully Login!</h1>
                      }
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Login
