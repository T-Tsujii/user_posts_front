import Link from 'next/link';

type PathType = {
  url: string;
  title: string;
};

const pathList: PathType[] = [
  { url: '/', title: 'トップページ' },
  { url: '/ssg', title: '投稿一覧(SSG)' },
  { url: '/isr', title: '投稿一覧(ISR)' },
  { url: '/ssr', title: '投稿一覧(SSR)' },
  { url: '/csr', title: '投稿一覧(CSR)' },
  { url: '/isrcsr', title: '投稿一覧(ISR+CSR)' },
  { url: '/new', title: '新規投稿' },
];

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-400 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>サンプル投稿アプリ</span>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          {pathList.map((path) => (
            <Link key={path.url} href={path.url}>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-lg text-white opacity-80 duration-200 hover:opacity-100 mr-4'>
                {path.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
