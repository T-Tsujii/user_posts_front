import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { MetaHead } from '../components/MetaHead';
import { Links } from '../components/Links';
import styles from '../styles/Home.module.css';
import { globalAxios, errorHandling } from '../service/globalAxios';

type PostType = {
  id: number;
  username: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

const Csr: NextPage = () => {
  const title = '投稿一覧(CSR)';

  const [posts, setPosts] = useState<PostType[]>([]);
  const fetchPosts = async () => {
    try {
      const response = await globalAxios.get('/posts');
      const posts = response.data;
      setPosts(posts);
    } catch (error) {
      errorHandling(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <MetaHead title={title} />

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <Links />
        {posts.map((post) => (
          <div key={post.id}>
            <div>投稿者名: {post.username}</div>
            <div>内容: {post.body}</div>
            <div>投稿日時: {format(new Date(post.createdAt), 'yyyy/MM/dd HH:mm:ss')}</div>
            <div>更新日時: {format(new Date(post.updatedAt), 'yyyy/MM/dd HH:mm:ss')}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Csr;
