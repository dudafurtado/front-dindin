import './style.css';
import ModalRegister from '../../components/ModalRegister';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import api from '../../services/api';
import { getItem } from '../../utils/storage';

function SpendDetails() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [resume, setResume] = useState('');

  const token = getItem('token');
  const balance = Number(resume.entrance) + Number(resume.exit);

  async function getResume () {
    try {
        const response = await api.get('/bank-statement', { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status > 204) return toast.error(response.data);

        setResume(response.data);
    } catch (error) {
        toast.error(error.response.data);
    }
  }

  useEffect(() => {
    getResume();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModal])

  return (
    <article className='SpendDetails Font-Rubik'>
        {isOpenModal && <ModalRegister setIsOpenModal={setIsOpenModal} />}
        <section className='SpendDetails-Container'>
            <h4 className='ResumeTitle Dark-Black Font-Seven'>Resumo</h4>
            <div className='Resume Font-Five'>
                <div className='Resume-TopOne'>
                    <span>Entradas</span>
                    <span className='MoneyEntrance'>R$ {resume.entrance}</span>
                </div>
                <div className='Resume-TopTwo'>
                    <span>Saídas</span>
                    <span className='MoneyExit'>R$ {resume.exit}</span>
                </div>
            </div>
            <div className='Resume-Bottom Font-Seven'>
                <span className='Dark-Black'>Saldo</span>
                <span className='MoneyTotal'>R$ {balance}</span>
            </div>
        </section>
        <button onClick={() => setIsOpenModal(true)} className='Button-Purple-Submit Font-Seven'>Adicionar Registro</button>
    </article>
  );
}

export default SpendDetails;