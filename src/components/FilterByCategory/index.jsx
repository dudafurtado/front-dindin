import './style.css';
import FilterIcon from '../../assets/icon-filter.svg';

import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { useState, useEffect } from 'react';

function FilterByCategory() {
   // const sectionCategoriesRef = useRef();

    const [categories, setCategories] = useState([]);

    function handleOpenCategories() {
        // useRef não funcionou, toggle() não funcionou e uma váriavel com boolean também não :(
    }

    async function loadCategories() {
        const token = getItem('token')
        try {
          const response = await api.get('/categoria',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          setCategories(response.data)
        } catch (error) {
          console.log(error.message)
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);

  return (
    <section className="FilterByCategory">
        <div onClick={() => handleOpenCategories()} className='ToOpenFilter Font-Lato Font-Seven'>
            <img src={FilterIcon} alt="Icone que abre a filtragem de categoria" />
            <h4>Filtrar</h4>
        </div>
          <section className='Categories'>
                <span className='CategoryTitle Font-Rubik Font-Five'>Categoria</span>
                <section>
                {categories.map((eachCategory) => (
                    <div className='CategoryName CategoryContainer Font-Rubik Font-Four' key={eachCategory.id}>
                        <span>{eachCategory.descricao}</span>
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