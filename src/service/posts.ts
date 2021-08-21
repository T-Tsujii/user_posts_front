import { globalAxios } from './globalAxios';
import type { PostType } from '../types/post';

const fetchPostsService = async () => {
  const response = await globalAxios.get<PostType[]>('/posts');
  return response.data;
};

export { fetchPostsService };
