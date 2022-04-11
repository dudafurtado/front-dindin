import './style.css';

import HeaderHome from '../../components/HeaderHome';
import FilterByCategory from '../../components/FilterByCategory';
import SpendsDetails from '../../components/SpendsDetails';
import ResumeOfSpends from '../../components/ResumeOfSpends';

import ModalEditProfile from '../../components/ModalEditProfile';
import ModalRegister from '../../components/ModalRegister';

function Home() {
  return (
    <article className="Home">
      <ModalEditProfile />
      
      {/* <ModalRegister /> */}
      <HeaderHome userName='Duda' />
      <main className='Dashboard-Home'>
        <section>
          <FilterByCategory />
          <SpendsDetails />
        </section>
        <ResumeOfSpends />
      </main>
    </article>
  );
}

export default Home;