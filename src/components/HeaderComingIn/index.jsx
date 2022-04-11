import './style.css';
import IconLogo from '../../assets/icon-logo.svg'

function HeaderCominIn() {
  return (
    <header className="Header-CominIn">
        <img 
        src={IconLogo} 
        alt="Logo da empresa Dindin" 
        />
        <h2 className='Dindin Font-Seven'>Dindin</h2>
    </header>
  );
}

export default HeaderCominIn;