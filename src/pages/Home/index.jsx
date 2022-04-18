import './style.css';

import HeaderHome from '../../components/HeaderHome';
import FilterByCategory from '../../components/FilterByCategory';
import ResumeOfSpends from '../../components/ResumeOfSpends';
import AllTheTransactions from '../../components/AllTheTransactions';

function Home() {
  return (
    <article className="Home">
      <HeaderHome />
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