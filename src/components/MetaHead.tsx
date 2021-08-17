import Head from 'next/head';

type Props = {
  title: string;
};

const MetaHead: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content='投稿アプリのサンプルです。' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export { MetaHead };
