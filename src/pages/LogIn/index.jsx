import './style.css';
import ComingIn from '../../components/ComingIn'
import IconLogo from '../../assets/icon-logo.svg'

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
      <header>
        <img 
        src={IconLogo} 
        alt="Logo da empresa Dindin" 
        />
        <h2 className='Dindin Font-Seven'>Dindin</h2>
      </header>
      <main>
      <section className='Presentation'>
        <h1 className='Title-Main-LogIn Font-Seven'>Controle suas <span className='Font-Purple'>finanças</span>, sem planilha chata.
        </h1>
        <p className='Paragraphy Font-Four '>
        Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
        </p>
        <button className='Font-Seven'>Cadastre-se</button>
      </section>
      <ComingIn 
      title='Login'
      input={inputs}
      button='Entrar'
      />
      </main>
    </article>
  );
}

export default LogIn;