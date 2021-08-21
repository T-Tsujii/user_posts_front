import type { NextPage } from 'next';
import { MetaHead } from '../components/MetaHead';

const Home: NextPage = () => {
  const title = '投稿サンプルアプリ';
  return (
    <div>
      <MetaHead title={title} />

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  );
};

export default Home;
