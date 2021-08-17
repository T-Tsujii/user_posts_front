import Link from 'next/link';

type PathType = {
  url: string;
  title: string;
};

const pathList: PathType[] = [
  { url: '/', title: 'トップページ' },
  { url: '/ssg', title: '投稿一覧(SSG)' },
  { url: '/csr', title: '投稿一覧(CSR)' },
  { url: '/new', title: '新規投稿' },
];

const Links: React.FC = () => {
  return (
    <ul>
      {pathList.map((path) => (
        <li key={path.url}>
          <Link href={path.url}>
            <a>{path.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Links };
