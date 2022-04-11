import './style.css';
import HeaderComingIn from '../../components/HeaderComingIn'
import CardComingIn from '../../components/CardComingIn'

function SignIn() {
  const inputs = [
    {
      id: 1,
      labelAndID: 'Nome',
      type: 'text'
    },
    {
      id: 2,
      labelAndID: 'E-mail',
      type: 'text'
    },
    {
      id: 3,
      labelAndID: 'Senha',
      type: 'password'
    },
    {
      id: 4,
      labelAndID: 'Confirmação de Senha',
      type: 'password'
    }
  ]

  return (
    <article className="SignIn">
      <HeaderComingIn />
      <main>
        <CardComingIn title='Cadastre-se' input={inputs} button='Cadastrar' newOne='true' />
      </main>
    </article>
  );
}

export default SignIn;