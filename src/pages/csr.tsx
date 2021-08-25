import type { NextPage } from 'next';
import { useState, useCallback, useEffect } from 'react';

import { MetaHead } from '../components/MetaHead';
import { errorHandling } from '../service/globalAxios';

import { fetchPostsService } from '../service/posts';
import { Post } from '../components/Post';

import type { PostType } from '../types/post';

const Csr: NextPage = () => {
  const title = '投稿一覧(CSR)';

  const [posts, setPosts] = useState<PostType[]>([]);
  const fetchPosts = useCallback(async () => {
    try {
      const posts = await fetchPostsService();
      setPosts(posts);
    } catch (error) {
      errorHandling(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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

export default Csr;
