import './style.css';
import CloseIcon from '../../assets/icon-close.svg'

function ModalRegister({ setIsOpenModal }) {
  const inputs =[
    {
      id: 1,
      label: 'Valor',
      type: 'text'
    },
    {
      id: 2,
      label: 'Categoria',
      type: 'selected'
    },
    {
      id: 3,
      label: 'Data',
      type: 'text'
    },
    {
      id: 4,
      label: 'Descrição',
      type: 'text'
    },
  ]

  return (
    <article className="ModalRegister Font-Rubik">
      <section className="Register">
        <div className='Register-Top'>
          <h1 className='Register-Title Font-Seven'>Adicionar Register</h1>
          <img onClick={() => setIsOpenModal(false)} src={CloseIcon} className='CloseIcon' alt="Icone para fechar o modal" />
        </div>
        <section className='Type'>
        <span className='Entrance Button-Purple-Submit'>Entrada</span>
        <span className='Exit Button-Purple-Submit'>Saída</span>
      </section>
      <form action="">
        {inputs.map((eachInput) => (
          <div className='Input-Register' key={eachInput.id}>
            <label className='Register-Label Font-Five' htmlFor="">{eachInput.label}</label>
            <input type={eachInput.type} />
          </div>
        ))}
        <button className='Button-Register Button-Purple-Submit'>Confirmar</button>
      </form>
      </section>
    </article>
  );
}

export default ModalRegister;