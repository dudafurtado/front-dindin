import './style.css';
import CloseIcon from '../../assets/icon-close.svg'

function ModalEditProfile() {
  const inputs =[
    {
      id: 1,
      label: 'Nome',
      type: 'text'
    },
    {
      id: 2,
      label: 'E-mail',
      type: 'email'
    },
    {
      id: 1,
      label: 'Senha',
      type: 'password'
    },
    {
      id: 1,
      label: 'Confirmação de senha',
      type: 'password'
    },
  ]

  return (
    <article className="ModalEditProfile Font-Rubik">
      <section className="EditProfile">
        <div className='Modal-Top'>
          <h1 className='Modal-Title Font-Seven'>Editar Perfil</h1>
          <img src={CloseIcon} alt="Icone para fechar o modal" />
        </div>
      <form action="">
        {inputs.map((eachInput) => (
          <div className='Input-Container' key={eachInput.id}>
            <label className='Modal-Label' htmlFor="">{eachInput.label}</label>
            <input type={eachInput.type} />
          </div>
        ))}
        <button>Confirmar</button>
      </form>
      </section>
    </article>
    
  );
}

export default ModalEditProfile;