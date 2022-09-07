import './style.css';
import PencilIcon from '../../assets/icon-pencil-edit.svg';
import TrashIcon from '../../assets/icon-trash.svg';

import api from '../../services/api';
import { getItem } from '../../utils/storage';

import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

function ResumeOfSpends({ isCategoriesOpen }) {
  const [transactions, setTransactions] = useState([]);
  const resumeRef = useRef(null);
  const token = getItem('token');

  //if (isCategoriesOpen) {
    //resumeRef.current.style.top = '320px'
  //} else {
    //resumeRef.current.style.top = '14px'
  //}

  async function loadTransactions() {
    try {
      const response = await api.get('/transaction',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setTransactions(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  async function deleteTransactions(IDbyTrans) {
    try {
      await api.delete(`/transaction/${IDbyTrans}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const localTransactions = [...transactions];
      const indexTrans = localTransactions.findIndex((trans) => trans.id === IDbyTrans);
      localTransactions.splice(1, indexTrans);
      
      setTransactions(localTransactions);
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  useEffect(() => {
    loadTransactions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article ref={resumeRef} className="ResumeOfSpends">
        <section className='TitleOfTransactions Font-Lato Font-Seven'>
            <span>Data</span>
            <span>Dia da semana</span>
            <span>Descrição</span>
            <span>Categoria</span>
            <span>Valor</span>
        </section>
        {transactions.map((eachTransaction) => (
          <div key={eachTransaction.id} className='Container-Transactions Font-Lato Font-Five'>
            <span>{eachTransaction.data}</span>
            <span>diaDaSemana</span>
            <span>{eachTransaction.descricao}</span>
            <span>{eachTransaction.categoria_id}</span>
            <span>{eachTransaction.valor}</span>
            <div>
              <img src={PencilIcon} alt="Icone do pincel indicando a para editar a transação" />
              <img onClick={() => deleteTransactions(eachTransaction.id)} src={TrashIcon} alt="Icone para deletar a transação" />
            </div>
        </div>
        ))}
    </article>
  );
}

export default ResumeOfSpends;