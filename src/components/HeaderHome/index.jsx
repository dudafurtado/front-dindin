import './style.css';
import LogoIcon from '../../assets/icon-logo.svg'
import UserIcon from '../../assets/icon-user.svg'
import GoOutIcon from '../../assets/icon-logout.svg'

import ModalEditProfile from '../../components/ModalEditProfile';

import { useState } from 'react'
import { getItem } from '../../utils/storage'


function HeaderHome() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenEditProfile () {
    setIsOpenModal(true)
  }

  const userName = getItem('userName')

  return (
    <header className="HeaderHome Font-Rubik">
      {isOpenModal === true ? <ModalEditProfile read={isOpenModal} manipulate={setIsOpenModal} /> : ''}
        <div className='Left-HeaderHome'>
            <img src={LogoIcon} alt='Icone da logo da empresa Dindin'/>
            <h2 className='Font-Seven Dindin'>Dindin</h2>
        </div>
        <div className='Right-HeaderHome'>
            <img onClick={() => handleOpenEditProfile()} className='UserIcon' src={UserIcon} alt='Icone de um usuarios'/>
            <span className='Font-Seven User-Name'>{userName}</span>
            <img className='GoOutIcon' src={GoOutIcon} alt='Icone porta de saída do Menu'/>
        </div>
    </header>
  );
}

export default HeaderHome;