import type { NextPage } from 'next';
import { MetaHead } from '../components/MetaHead';

const Ssg: NextPage = () => {
  const title = '投稿一覧(SSG)';
  return (
    <div>
      <MetaHead title={title} />

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  );
};

export default Ssg;
