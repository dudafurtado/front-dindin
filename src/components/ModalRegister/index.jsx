import './style.css';
import CloseIcon from '../../assets/icon-close.svg';

import { useRef } from 'react';

function ModalRegister({ setIsOpenModal }) {
  const exitRef = useRef();
  const entranceRef = useRef();

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

  function typeClicked(type) {
    console.log('um dos tipos foi tocado')
    if (type === 'entrance') {
      console.log('entrada selecionada')
      entranceRef.current.style.background = 'var(--blue-money-color)';
      exitRef.current.style.background = 'var(--light-gray-color)';
    } else {
      console.log('saída selecionada')
      entranceRef.current.style.background = 'var(--light-gray-color)';
      exitRef.current.style.background = 'var(--red-exit-color)';
    }
  }

  return (
    <article className="ModalRegister Font-Rubik">
      <section className="Register">
        <div className='Register-Top'>
          <h1 className='Register-Title Font-Seven'>Adicionar Register</h1>
          <img onClick={() => setIsOpenModal(false)} src={CloseIcon} className='CloseIcon' alt="Icone para fechar o modal" />
        </div>
        <section className='Type'>
        <span ref={entranceRef} onClick={() => typeClicked('entrance')} className='Entrance'>Entrada</span>
        <span ref={exitRef} onClick={() => typeClicked('exit')}  className='Exit'>Saída</span>
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