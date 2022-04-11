import './style.css';

function ComingIn({ title, input, button, newOne }) {
  return (
    <section className='CardToLoginAndSignIn Font-Rubik'>
        <h3 className='Title-Card Font-Five'>{title}</h3>
        <form action="submit">
          {input.map((eachInput) => (
            <div key={eachInput.id} className='Div-Input-Card Font-Four'>
              <label className='Font-Four' htmlFor="">{eachInput.labelAndID}</label>
              <input className='Input-Card' id={eachInput.labelAndID} type={eachInput.type} />
            </div>
          ))}
          <button className='Button-Card Font-Seven'>{button}</button>
          {newOne === 'true' ? <a className='JaCadastrou' href='/'>Já tem cadastro? Clique aqui!</a> : ''}
        </form>
      </section>
  );
}

export default ComingIn;