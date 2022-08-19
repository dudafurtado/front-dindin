import './style.css';
import CloseIcon from '../../assets/icon-close.svg';

import { useState } from 'react';
import toast from 'react-hot-toast';

import api from '../../services/api';
import { getItem } from '../../utils/storage';

function ModalEditProfile({ setIsOpenModal }) {
  const inputs =[
    {
      id: 1,
      label: 'Nome',
      type: 'text',
      value: 'name'
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
      value: 'password'
    },
    {
      id: 4,
      label: 'Confirmação de senha',
      type: 'password',
      value: 'password'
    },
  ]

  const [editProfile, setEditProfile] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChangeInputValue (addedValue, event) {
    const inputValue = event.target.value;
    setEditProfile({...editProfile, [addedValue]: inputValue});
  }

  async function handleSubmit (e) {
    e.preventDefault();

    if (!editProfile.name || !editProfile.email || !editProfile.password) {
      return toast.error('Todos os campos são obrigatórios');
    }
    
    handleUpdateUser();
  }

  async function handleUpdateUser() {
    const token = getItem('token');
    try {
      await api.put('/user', {
        ...editProfile
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Seu perfil foi atualizado com sucesso');

      handleClearForm();
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  function handleClearForm () {
    setEditProfile({
      name: '',
      email: '',
      password: ''
    });
 }

  return (
    <article className="ModalEditProfile Font-Rubik">
      <section className="EditProfile">
        <div className='Modal-Top'>
          <h1 className='Modal-Title Font-Seven'>Editar Perfil</h1>
          <img onClick={() => setIsOpenModal(false)} src={CloseIcon}className='CloseIcon' alt="Icone para fechar o modal" />
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