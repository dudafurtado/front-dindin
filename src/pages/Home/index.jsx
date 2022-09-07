import './style.css';
import HeaderHome from '../../components/HeaderHome';
import FilterByCategory from '../../components/FilterByCategory';
import ResumeOfSpends from '../../components/ResumeOfSpends';
import AllTheTransactions from '../../components/AllTheTransactions';

import { useState } from 'react';

function Home() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <article className="Home">
      <HeaderHome />
      <main className='Dashboard-Home'>
        <section className='First-Section-Home'>
          <FilterByCategory isCategoriesOpen={isCategoriesOpen} setIsCategoriesOpen={setIsCategoriesOpen}/>
          <ResumeOfSpends />
        </section>
        <AllTheTransactions isCategoriesOpen={isCategoriesOpen} />
      </main>
    </article>
  );
}

export default Home;