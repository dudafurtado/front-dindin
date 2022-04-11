import './style.css';
import CardComingIn from '../../components/CardComingIn'
import HeaderComingIn from '../../components/HeaderComingIn'

function LogIn() {
  const inputs = [
    {
      id: 1,
      labelAndID: 'E-mail',
      type: 'text'
    },
    {
      id: 2,
      labelAndID: 'Senha',
      type: 'password'
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
        <button className='Font-Seven'>Cadastre-se</button>
      </section>
      <CardComingIn title='Login' input={inputs} button='Entrar' newOne='false' />
      </main>
    </article>
  );
}

export default LogIn;