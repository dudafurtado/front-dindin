import './style.css';
import FilterIcon from '../../assets/icon-filter.svg'

function FilterByCategory() {
    const allCategories = [
        {
            id: 1,
            name: 'Contas'
        },
        {
            id: 2,
            name: 'Depósito'
        },
        {
            id: 3,
            name: 'Contas'
        },
        {
            id: 4,
            name: 'Lazer'
        },
        {
            id: 5,
            name: 'Mercado'
        },
        {
            id: 6,
            name: 'TED'
        },
        {
            id: 7,
            name: 'Compras'
        },
        {
            id: 8,
            name: 'Farmárcia'
        },
        {
            id: 9,
            name: 'Pix'
        }
    ]

  return (
    <section className="FilterByCategory">
        <div className='ToOpenFilter
        Font-Lato Font-Seven'>
            <img src={FilterIcon} alt="Icone que abre a filtragem de categoria" />
            <h4>Filtrar</h4>
        </div>
        <section className='Categories'>
                <span className='CategoryTitle Font-Rubik Font-Five'>Categoria</span>
                <section>
                {allCategories.map((eachCategory) => (
                    <div className='CategoryName CategoryContainer Font-Rubik Font-Four' key={eachCategory.id}>
                        <span>{eachCategory.name}</span>
                        <span>+</span>
                    </div>
                ))}
                </section>
                <div className='Buttons-Category Font-Lato Font-Seven'>
                    <button className='CleanFilters Button-White-Filter'>Limpar Filtros</button>
                    <button className='Button-Purple-Filter'>Aplicar Filtros</button>
                </div>
        </section>
    </section>
  );
}

export default FilterByCategory;