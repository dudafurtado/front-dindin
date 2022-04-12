import './style.css';

import HeaderHome from '../../components/HeaderHome';
import FilterByCategory from '../../components/FilterByCategory';
import ResumeOfSpends from '../../components/ResumeOfSpends';
import AllTheTransactions from '../../components/AllTheTransactions';

// import ModalEditProfile from '../../components/ModalEditProfile';
// import ModalRegister from '../../components/ModalRegister';

function Home() {
  return (
    <article className="Home">
      {/* <ModalEditProfile /> */}
      {/* <ModalRegister /> */}
      <HeaderHome userName='Duda' />
      <main className='Dashboard-Home'>
        <section className='First-Section-Home'>
          <FilterByCategory />
          <ResumeOfSpends />
        </section>
        <AllTheTransactions />
      </main>
    </article>
  );
}

export default Home;