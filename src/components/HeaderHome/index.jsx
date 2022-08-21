import './style.css';
import LogoIcon from '../../assets/icon-logo.svg'
import UserIcon from '../../assets/icon-user.svg'
import GoOutIcon from '../../assets/icon-logout.svg'

import ModalEditProfile from '../../components/ModalEditProfile';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getItem, clearAll } from '../../utils/storage'


function HeaderHome() {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const userName = getItem('userName');

  function LogOut () {
    clearAll();
    navigate('/login');
  }

  return (
    <header className="HeaderHome Font-Rubik">
      {isOpenModal && <ModalEditProfile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
        <div className='Left-HeaderHome'>
            <img src={LogoIcon} alt='Icone da logo da empresa Dindin'/>
            <h2 className='Font-Seven Dindin'>Dindin</h2>
        </div>
        <div className='Right-HeaderHome'>
            <img onClick={() => setIsOpenModal(true)} className='UserIcon' src={UserIcon} alt='Icone de um usuarios'/>
            <span className='Font-Seven User-Name'>{userName}</span>
            <img onClick={() => LogOut()} className='GoOutIcon' src={GoOutIcon} alt='Icone porta de saída do Menu'/>
        </div>
    </header>
  );
}

export default HeaderHome;