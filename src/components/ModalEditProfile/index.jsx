import './style.css';
import CloseIcon from '../../assets/icon-close.svg'

import { useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function ModalEditProfile({ read, manipulate }) {
  const inputs =[
    {
      id: 1,
      label: 'Nome',
      type: 'text',
      value: 'nome'
    },
    {
      id: 2,
      label: 'E-mail',
      type: 'email',
      value: 'email'
    },
    {
      id: 3,
      label: 'Senha',
      type: 'password',
      value: 'senha'
    },
    {
      id: 4,
      label: 'Confirmação de senha',
      type: 'password',
      value: 'senha'
    },
  ]

  function handleCloseModal () {
    if (read === true) {
      manipulate(false)
    }
  }

  const [editProfile, setEditProfile] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  function handleChangeInputValue (addedValue, event) {
    const inputValue = event.target.value;
    setEditProfile({...editProfile, [addedValue]: inputValue});
  }

  async function handleSubmit (e) {
    e.preventDefault();

    if (!editProfile.nome || !editProfile.email || !editProfile.senha) {
      return;
    }
    handleUpdateUser();
  }

  async function handleUpdateUser() {
    const token = getItem('token')
    const userID = getItem('userID')
    try {
      await api.put(`/transaction/${userID}`, {
        ...editProfile
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      handleClearForm();
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleClearForm () {
    setEditProfile({
      nome: '',
      email: '',
      senha: ''
    });
 }

  return (
    <article className="ModalEditProfile Font-Rubik">
      <section className="EditProfile">
        <div className='Modal-Top'>
          <h1 className='Modal-Title Font-Seven'>Editar Perfil</h1>
          <img onclick={() => handleCloseModal()} src={CloseIcon} alt="Icone para fechar o modal" />
        </div>
      <form onSubmit={handleSubmit}>
        {inputs.map((eachInput) => (
          <div className='Input-Container' key={eachInput.id}>
            <label className='Modal-Label Font-Five' htmlFor={eachInput.label}>{eachInput.label}</label>
            <input 
            id={eachInput.label} 
            type={eachInput.type} 
            onChange={(event) => handleChangeInputValue(eachInput.value, event)}
            />
          </div>
        ))}
        <button className='Button-Modal Button-Purple-Submit'>Confirmar</button>
      </form>
      </section>
    </article>
  );
}

export default ModalEditProfile;