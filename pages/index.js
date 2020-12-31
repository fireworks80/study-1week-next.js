import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { DatePicker } from 'antd';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <img src='/vercel.svg' alt='' />
        <Link href='/articles'>
          <a>Articles</a>
        </Link>
        <Link href='/get-uuid'>
          <a>get uuid</a>
        </Link>
        <Link href='/get-double/[value]' as='/get-double/11'>
          <a>get double 11</a>
        </Link>
        <Link href='/get-double/[value]' as='/get-double/2'>
          <a>get double 2</a>
        </Link>
        <div>
          <DatePicker />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
