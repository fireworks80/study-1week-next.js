import Link from 'next/link';
import axios from 'axios';
// import { useEffect, useState } from 'react';

function GetUuid(props) {
  // const [uuid, setUuid] = useState('');

  // useEffect(() => {
  //   // 화면에 마운트 된 후 동작 (ssr에는 포함이 안됨)
  //   // fetch 는 브라우저 용 (ssr에는 fetch가 없음)
  //   fetch('/api/uuid')
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((json) => setUuid(json.uuid));
  // }, []);
  return (
    <>
      <p>{props.uuid}</p>
      <p>
        <Link href='/'>
          <a>돌아가기</a>
        </Link>
      </p>
    </>
  );
}

// getInitialProps
GetUuid.getInitialProps = async function () {
  // 반드시 async fn으로 작성
  const response = await axios.get('http://localhost:1234' + '/api/uuid');
  return {
    uuid: response.data.uuid,
  };
};

export default GetUuid;
