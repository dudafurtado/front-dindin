import './style.css';
import api from '../../services/api';
import { setItem } from '../../utils/storage';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function CardComingIn({ title, input, button, isSignUp }) {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [login, setLogin] = useState({
    email: '',
    password: ''
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
    console.log('entrei no submit')
    e.preventDefault();
    console.log(signUp)
    console.log(login)

    if (isSignUp === true) {
      console.log('sign up')
      if (!signUp.name || !signUp.email || !signUp.password) {
        console.log('faltando campo do sign up')
        return;
      }
      handleSignUp();
    } else {
      if (!login.email || !login.password) {
        return;
      }
      handleLogin();
    }
  }

  async function handleLogin () {
    console.log('entrei no login')
    try {
      const response = await api.post('/login', {
        ...login
      });

      const { token, usuarios } = response.data;
      setItem('token', token);
      setItem('userID', usuarios.id);
      setItem('userName', usuarios.name);

      toast.success('Login realizado com sucesso. Vamos para o seu dashboard?');
      navigate('/home');

      handleClearForm()
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleSignUp () {
    console.log('entrei no cadastrar')
    try {
      await api.post('/user', {
        ...signUp
      })

      toast.success('Vamos para o login confirmar sua conta. É para sua segurança, ok?');
      navigate('/login');

      handleClearForm();
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleClearForm () {
    console.log('limpar o form')
     if (isSignUp === true) {
      setSignUp({
        name: '',
        email: '',
        password: ''
      })
    } else {
      setLogin({
        email: '',
        password: ''
      })
    }
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
          <button className='Button-Card Button-Purple-Submit Font-Seven'>{button}
          </button>
          {isSignUp === true ? <span onClick={() => navigate('/login')} className='JaCadastrou'>Já tem cadastro? Clique aqui!</span> : ''}
        </form>
      </section>
  );
}

export default CardComingIn;