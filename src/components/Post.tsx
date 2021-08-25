import { formatDate } from '../service/formatDate';
import type { PostType } from '../types/post';

type Props = {
  post: PostType;
};

const Post: React.FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className='max-w-md rounded shadow-lg my-4 px-6 py-4'>
      <div className='font-bold text-xl'>{post.username}</div>
      <p className='text-gray-700 text-lg py-4'>{post.body}</p>
      <div className='justify-end'>{formatDate(post.createdAt)}</div>
      <div className='justify-end'>{formatDate(post.updatedAt)}</div>
    </div>
  );
};

export { Post };
