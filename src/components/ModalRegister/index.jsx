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
    <article className="ModalEditProfile Font-Rubik">
      <section className="EditProfile">
        <div className='Modal-Top'>
          <h1 className='Modal-Title Font-Seven'>Adicionar Register</h1>
          <img onClick={() => setIsOpenModal(false)} src={CloseIcon} className='CloseIcon' alt="Icone para fechar o modal" />
        </div>
        <section className='Type'>
        <span className='Entrance Button-Purple-Submit'>Entrada</span>
        <span className='Exit Button-Purple-Submit'>Saída</span>
      </section>
      <form action="">
        {inputs.map((eachInput) => (
          <div className='Input-Container' key={eachInput.id}>
            <label className='Modal-Label Font-Five' htmlFor="">{eachInput.label}</label>
            <input type={eachInput.type} />
          </div>
        ))}
        <button className='Button-Modal Button-Purple-Submit'>Confirmar</button>
      </form>
      </section>
    </article>
  );
}

export default ModalRegister;