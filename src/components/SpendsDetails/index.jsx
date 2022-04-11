import './style.css';

function SpendDetails() {
  return (
    <article className='SpendDetails Font-Rubik'>
        <section>
            <h4 className='ResumeTitle Dark-Black'>Resumo</h4>
            <div className='Resume'>
                <div className='Resume-TopOne'>
                    <span className='Dark-Black'>Entradas</span>
                    <span className='MoneyEntrance'>R$ 200,00</span>
                </div>
                <div className='Resume-TopTwo'>
                    <span className='Dark-Black'>Saídas</span>
                    <span className='MoneyExit'>R$ 70,50</span>
                </div>
            </div>
            <div className='Resume-Bottom'>
                <span className='Dark-Black'>Saldo</span>
                <span className='MoneyTotal'>R$ 129,50</span>
            </div>
        </section>
        <button>Adicionar Registro</button>
    </article>
  );
}

export default SpendDetails;