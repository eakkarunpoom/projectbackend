import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const emailHandler = (e) => {
    console.log('email',e.target.value)
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    console.log('password',e.target.value)
    setPassword(e.target.value);
  }
  const signupHandler = async (e) => {
    e.preventDefault()
    console.log(email,password);
    await axios.post(`http://localhost:8080/signup`, {email,password})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    navigate('/login')
  }
  return(
    <div onSubmit={signupHandler}>
      <h1>Signup</h1>
      <form>
        <label>E-mail : </label>
        <input type="text" placeholder="input email" onChange={emailHandler}/>
        <label>Password : </label>
        <input type="password" placeholder="input password" onChange={passwordHandler}/>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup;