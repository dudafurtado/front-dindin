import './style.css';
import LogoIcon from '../../assets/icon-logo.svg'
import UserIcon from '../../assets/icon-user.svg'
import GoOutIcon from '../../assets/icon-logout.svg'

function HeaderHome({ userName }) {
  return (
    <header className="HeaderHome Font-Rubik">
        <div className='Left-HeaderHome'>
            <img src={LogoIcon} alt='Icone da logo da empresa Dindin'/>
            <h2 className='Font-Seven Dindin'>Dindin</h2>
        </div>
        <div className='Right-HeaderHome'>
            <img className='UserIcon' src={UserIcon} alt='Icone de um usuarios'/>
            <span className='Font-Seven User-Name'>{userName}</span>
            <img className='GoOutIcon' src={GoOutIcon} alt='Icone porta de saída do Menu'/>
        </div>
    </header>
  );
}

export default HeaderHome;