import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRequest } from '../hooks/request'

function Welcome() {
  const { makeRequest, error } = useRequest();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({email: '', password: ''});

  const handleChange = e => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
      if(e.key === 'Enter') {
        const res = await makeRequest('api/auth/register', 'POST', {...userData})
        res.token && res.id && dispatch({type: 'LOGIN', token: res.token, id: res.id})
      }
  }
  console.log(error)
  return (
    <div className='row container'>
      <h2 >Future is here.<br /> Compress your data.</h2>
      <form className='col s12'>
        <div className='row' onKeyPress={handleSubmit}>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>email</i>
            <input id='email' name='email' type='text' className='validate' onChange={handleChange} />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>password</i>
            <input id='password' name='password' type='password' className='validate' onChange={handleChange} />
            <label htmlFor='password'>Password</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Welcome
