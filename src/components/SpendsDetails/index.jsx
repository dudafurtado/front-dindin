import './style.css';

function SpendDetails() {
  return (
    <article className='SpendDetails Font-Rubik'>
        <section>
            <h4>Resumo</h4>
            <div>
                <div>
                    <span>Entradas</span>
                    <span>Saídas</span>
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <span>Saldo</span>
                <span></span>
            </div>
        </section>
        <button>Adicionar Registro</button>
    </article>
  );
}

export default SpendDetails;