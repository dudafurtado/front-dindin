import './style.css';
import PencilIcon from '../../assets/icon-pencil-edit.svg';
import TrashIcon from '../../assets/icon-trash.svg';

function ResumeOfSpends() {
  const transactions = [
    {
      id: 1, 
      date: '01/09/21',
      dayOfWeek: 'Quarta',
      description: 'Venda dos brigadeiros',
      category: 'Pix',
      price: 'R$ 100,00'
    },
    {
      id: 2, 
      date: '02/09/21',
      dayOfWeek: 'Quinta',
      description: '',
      category: 'Lazer',
      price: 'R$ 58,50'
    },
    {
      id: 3, 
      date: '03/09/21',
      dayOfWeek: 'Sexta',
      description: '',
      category: 'Alimentação',
      price: 'R$ 12,00'
    },
    {
      id: 4, 
      date: '06/09/21',
      dayOfWeek: 'Segunda',
      description: 'Venda dos casadinhos',
      category: 'Pix',
      price: 'R$ 100,00'
    }
  ]
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
            <span>{eachTransaction.date}</span>
            <span>{eachTransaction.dayOfWeek}</span>
            <span>{eachTransaction.description}</span>
            <span>{eachTransaction.category}</span>
            <span>{eachTransaction.price}</span>
            <div>
              
            </div>
            <img src={PencilIcon} alt="Icone do pincel indicando a para editar a transação" />
            <img src={TrashIcon} alt="Icone para deletar a transação" />
        </div>
        ))}
    </article>
  );
}

export default ResumeOfSpends;