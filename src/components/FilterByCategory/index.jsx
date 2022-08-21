import './style.css';
import FilterIcon from '../../assets/icon-filter.svg';

import api from '../../services/api';
import { getItem } from '../../utils/storage';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function FilterByCategory() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const token = getItem('token')

    async function loadCategories() {
        try {
          const response = await api.get('/category', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          setCategories(response.data);
        } catch (error) {
          toast.error(error.response.data);
        }
    }

    useEffect(() => {
        loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <section className="FilterByCategory">
        <div onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} className='ToOpenFilter Font-Lato Font-Seven'>
            <img src={FilterIcon} alt="Icone que abre a filtragem de categoria" />
            <h4>Filtrar</h4>
        </div>
        {isCategoriesOpen &&
          <section className='Categories'>
                <span className='CategoryTitle Font-Rubik Font-Five'>Categoria</span>
                <section>
                {categories.map((eachCategory) => (
                    <div className='CategoryName CategoryContainer Font-Rubik Font-Four' key={eachCategory.id}>
                        <span>{eachCategory.description}</span>
                        <span>+</span>
                    </div>
                ))}
                </section>
                <div className='Buttons-Category Font-Lato Font-Seven'>
                    <button className='CleanFilters Button-White-Filter'>Limpar Filtros</button>
                    <button className='Button-Purple-Filter'>Aplicar Filtros</button>
                </div>
          </section>
        }       
    </section>
  );
}

export default FilterByCategory;