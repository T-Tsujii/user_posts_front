import type { NextPage } from 'next';
import { MetaHead } from '../components/MetaHead';
import { SubmitPost } from '../components/SubmitPost';

const New: NextPage = () => {
  const title = '新規投稿';
  return (
    <div>
      <MetaHead title={title} />

      <main>
        <h1>{title}</h1>
        <SubmitPost />
      </main>
    </div>
  );
};

export default New;
