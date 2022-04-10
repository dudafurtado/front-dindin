import './style.css';
import FilterIcon from '../../assets/icon-filter.svg'

function FilterByCategory() {
  return (
    <section className="FilterByCategory">
        <div>
            <img src={FilterIcon} alt="" />
            <span></span>
        </div>
        <section>
            <div>
                <h4></h4>
                <div>
                    <span></span>
                    <img src="" alt="" />
                </div>
                <button></button>
                <button></button>
            </div>
        </section>
    </section>
  );
}

export default FilterByCategory;