import './style.css';
import HeaderComingIn from '../../components/HeaderComingIn';
import CardComingIn from '../../components/CardComingIn';

function SignUp() {
  const inputs = [
    {
      id: 1,
      label: 'Nome',
      type: 'text',
      value: 'name'
    },
    {
      id: 2,
      label: 'E-mail',
      type: 'text',
      value: 'email'
    },
    {
      id: 3,
      label: 'Senha',
      type: 'password',
      value: 'password'
    },
    {
      id: 4,
      label: 'Confirmação de Senha',
      type: 'password',
      value: 'password'
    }
  ]

  return (
    <article className="SignIn Font-Rubik">
      <HeaderComingIn />
      <main>
        <CardComingIn title='Cadastre-se' input={inputs} button='Cadastrar' isSignUp={true} />
      </main>
    </article>
  );
}

export default SignUp;