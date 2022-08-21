import './style.css';
import CloseIcon from '../../assets/icon-close.svg';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import api from '../../services/api';
import { getItem } from '../../utils/storage';

function ModalEditProfile({ isOpenModal, setIsOpenModal }) {
  const [editProfile, setEditProfile] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const token = getItem('token');

  let inputs =[
    {
      id: 1,
      label: 'Nome',
      type: 'text',
      value: editProfile.name
    },
    {
      id: 2,
      label: 'E-mail',
      type: 'email',
      value: editProfile.email
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

  async function loadUser () {
    try {
      const { data } = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setEditProfile({
        name: data.name,
        email: data.email
      })
    } catch (error) {
      return toast.error(error.data);
    }
  }

  function handleChangeInputValue (addedValue, event) {
    const inputValue = event.target.value;
    setEditProfile({...editProfile, [addedValue]: inputValue});
  }

  function handleSubmit (e) {
    e.preventDefault();

    if (!editProfile.name || !editProfile.email) return toast.error('Altere o valor ou mantenha os dados anteriores');

    if (!editProfile.password) return toast.error('Por questões de segurança, toda e qualquer alteração do usuário precisa da senha');

    if (editProfile.password !== editProfile.confirmPassword) return toast.error('É necessário que as senhas coincidam');
    
    handleUpdateUser();
  }

  async function handleUpdateUser() {
    try {
      await api.put('/user', {
        name: editProfile.name,
        email: editProfile.name,
        password: editProfile.password
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Seu perfil foi atualizado com sucesso');
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModal]);

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
            value={eachInput.value}
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