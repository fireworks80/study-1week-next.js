import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

// 처음 로딩시에는 index.js에서 getInitialProps로 데이터를 가져와서 데이터를 보여주는 곳에서 state를 생성해서 보여주고
// data를 갱신하려면 갱신하려는 곳에서 state를 갱신해서 대시 갱신을 한다.
// 갱신에 대한 목록을 state로 분리 한다.

export default function ArticleList(props) {
  const [list, setList] = useState(props.list || []);

  function reload() {
    // axios.get(...);
    setList([]);
  }

  return (
    <div>
      <Head>
        <title>Article List</title>
      </Head>
      <h1>Article List</h1>
      <p>
        <button>데이터 갱신</button>
      </p>
      <ul>
        <li>
          <Link href='/articles/readme'>
            <a>readme</a>
          </Link>
        </li>
      </ul>
      {list.map((item) => (
        <div></div>
      ))}
    </div>
  );
}
