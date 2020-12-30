import Link from 'next/link';
import Head from 'next/head';
export default function Readme(props) {
  return (
    <div>
      <Head>
        <title>Read Me</title>
      </Head>
      <h1>Read Me</h1>
      <a href='/articles'>Back to List</a>
    </div>
  );
}
