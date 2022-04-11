import './style.css';

function ComingIn({ title, input, button}) {
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
        </form>
      </section>
  );
}

export default ComingIn;