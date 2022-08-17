import './style.css';
import PencilIcon from '../../assets/icon-pencil-edit.svg';
import TrashIcon from '../../assets/icon-trash.svg';

import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { useState, useEffect } from 'react';

function ResumeOfSpends() {
  const [transactions, setTransactions] = useState([]);

  async function loadTransactions() {
    const token = getItem('token')
    try {
      const response = await api.get('/transacao',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTransactions(response.data);
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteTransactions(IDbyTrans) {
    const token = getItem('token')
    try {
      await api.delete(`/transacao/${IDbyTrans}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const localTransactions = [...transactions];
      const indexTrans = localTransactions.findIndex((trans) => trans.id === IDbyTrans);
      localTransactions.splice(1, indexTrans);
      setTransactions(localTransactions);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <article className="ResumeOfSpends">
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