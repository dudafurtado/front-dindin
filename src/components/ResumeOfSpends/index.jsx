import './style.css';

function SpendDetails() {
  return (
    <article className='SpendDetails Font-Rubik'>
        <section className='SpendDetails-Container'>
            <h4 className='ResumeTitle Dark-Black Font-Seven'>Resumo</h4>
            <div className='Resume Font-Five'>
                <div className='Resume-TopOne'>
                    <span>Entradas</span>
                    <span className='MoneyEntrance'>R$ 200,00</span>
                </div>
                <div className='Resume-TopTwo'>
                    <span>Saídas</span>
                    <span className='MoneyExit'>R$ 70,50</span>
                </div>
            </div>
            <div className='Resume-Bottom Font-Seven'>
                <span className='Dark-Black'>Saldo</span>
                <span className='MoneyTotal'>R$ 129,50</span>
            </div>
        </section>
        <button className='Button-Purple-Submit Font-Seven'>Adicionar Registro</button>
    </article>
  );
}

export default SpendDetails;