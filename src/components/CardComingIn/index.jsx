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
    e.preventDefault();

    if (isSignUp === true) {
      if (!signUp.name || !signUp.email || !signUp.password) {
        return toast.error("Todos os campos são obrigatórios");
      }
      handleSignUp();
    } else {
      if (!login.email || !login.password) {
        return toast.error("Todos os campos são obrigatórios");
      }
      handleLogin();
    }
  }

  async function handleLogin () {
    try {
      const response = await api.post('/login', {
        ...login
      });

      if (response.status > 204) return toast.error(response.data);

      const { token, user } = response.data;
      setItem('token', token);
      setItem('userName', user.name);

      toast.success('Login realizado com sucesso. Vamos para o seu dashboard?');
      navigate('/home');

      handleClearForm();
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  async function handleSignUp () {
    try {
      const response = await api.post('/user', {
        ...signUp
      })

      if (response.status > 204) return toast.error(response.data);

      toast.success('Vamos para o login confirmar sua conta. É para sua segurança, ok?');
      navigate('/login');

      handleClearForm();
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  function handleClearForm () {
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