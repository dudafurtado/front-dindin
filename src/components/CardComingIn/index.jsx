import './style.css';
import api from '../../services/api';
import { setItem } from '../../utils/storage';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CardComingIn({ title, input, button, isSignUp }) {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const [login, setLogin] = useState({
    email: '',
    senha: ''
  });

  function handleChangeInputValue (addedValue, event) {
    const inputValue = event.target.value;

    if (isSignUp === true) {
      setSignUp({...signUp, [addedValue]: inputValue});
    } else {
      setLogin({...login, [addedValue]: inputValue});
    }
  }

  async function handleSubmit (e) {
    e.preventDefault();

    if (isSignUp === true) {
      if (!signUp.nome || !signUp.email || !signUp.senha) {
        return;
      }
      handleSignUp();
    } else {
      if (!login.email || !login.senha) {
        return;
      }
      handleLogin();
    }
  }

  async function handleLogin () {
    try {
      const response = await api.post('/login', {
        ...login
      });

      const { token, usuarios } = response.data;
      setItem('token', token);
      setItem('userID', usuarios.id);
      setItem('userName', usuarios.nome)

      navigate('/home');

      handleClearForm()
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }
  }

  async function handleSignUp () {
    console.log('entrou na função de sign up')
    try {
      await api.post('/cadastrar', {
        ...signUp
      })

      navigate('/login');

      handleClearForm()
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }
  }

  function handleClearForm () {
     if (isSignUp === true) {
      setSignUp({
        nome: '',
        email: '',
        senha: ''
      })
    } else {
      setLogin({
        email: '',
        senha: ''
      })
    }
  }

  function handleToLogin() {
    navigate('/login')
  }

  return (
    <section className='CardToLoginAndSignIn Font-Rubik'>
        <h3 className='Title-Card Font-Five'>{title}</h3>
        <form onSubmit={handleSubmit}>
          {input.map((eachInput) => (
            <div key={eachInput.id} className='Div-Input-Card Font-Four'>
              <label className='Font-Four' htmlFor={eachInput.label}>{eachInput.label}</label>
              <input 
              className='Input-Card' 
              id={eachInput.label} 
              type={eachInput.type} 
              onChange={(event) => handleChangeInputValue(eachInput.value, event)}
              />
            </div>
          ))}
          <button className='Button-Card Button-Purple-Submit Font-Seven'>{button}</button>
          {isSignUp === true ? <span onClick={() => handleToLogin()} className='JaCadastrou'>Já tem cadastro? Clique aqui!</span> : ''}
        </form>
      </section>
  );
}

export default CardComingIn;