import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [values, setValues] = useState();
  
  const register = (value) => {
    setValues((prevValue) =>({
      ...prevValue, 
      [value.target.name]: value.target.value,
    }));
  };
  const EnviarValores = ()=>{
    axios.post('http://localhost:3080/teste', values)
  }

  useEffect(()=>{
      
  },[])
  console.log(values);
  
  return (
    <div className="App">
      <div className='container--body'>
        <h1>Cadastre-se</h1>
        <div className='container--input'>
          <input type="text"
                placeholder='Login'
                name="login"
                className='login--input'
                onChange={register}
          />
          <input type='text'
                placeholder='Password'
                name='password'
                className='password--input'
                onChange={register}
          />      
          <button name='button' className='button--input' onClick={EnviarValores()}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
