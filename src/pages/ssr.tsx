import type { NextPage, GetServerSideProps } from 'next';
import { MetaHead } from '../components/MetaHead';
import { Post } from '../components/Post';
import { fetchPostsService } from '../service/posts';
import type { PostType } from '../types/post';

type Props = {
  posts: PostType[];
};

const Ssr: NextPage<Props> = (props) => {
  const title = '投稿一覧(SSR)';
  const { posts } = props;
  return (
    <div>
      <MetaHead title={title} />

      <main>
        <h1>{title}</h1>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const posts = await fetchPostsService();
    return {
      props: { posts },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Ssr;
