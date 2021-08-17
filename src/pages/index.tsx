import type { NextPage } from 'next';
import { MetaHead } from '../components/MetaHead';
import { Links } from '../components/Links';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const title = '投稿サンプルアプリ';
  return (
    <div className={styles.container}>
      <MetaHead title={title} />

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <Links />
      </main>
    </div>
  );
};

export default Home;
