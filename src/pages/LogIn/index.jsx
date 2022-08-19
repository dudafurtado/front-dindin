import './style.css';
import CardComingIn from '../../components/CardComingIn';
import HeaderComingIn from '../../components/HeaderComingIn';

import { useNavigate } from 'react-router-dom'

function LogIn() {
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      label: 'E-mail',
      type: 'text',
      value: 'email'
    },
    {
      id: 2,
      label: 'Senha',
      type: 'password',
      value: 'password'
    }
  ]

  return (
    <article className="LogIn Font-Rubik">
      <HeaderComingIn />
      <main>
      <section className='Presentation'>
        <h1 className='Title-Main-LogIn Font-Seven'>Controle suas <span className='Font-Purple'>finanças</span>, sem planilha chata.
        </h1>
        <p className='Paragraphy Font-Four '>
        Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
        </p>
        <button 
        className='Button-Purple-Submit Font-Seven'
        onClick={() => navigate('/cadastrar')}
        >
          Cadastre-se
        </button>
      </section>
      <CardComingIn title='Login' input={inputs} button='Entrar' isSignUp={false} />
      </main>
    </article>
  );
}

export default LogIn;