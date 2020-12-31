import { Button } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

function GetDouble(props) {
  const router = useRouter();

  return (
    <>
      <p>{props.value}</p>
      <p>
        <Button onClick={() => router.push('/')}>돌아가기</Button>
      </p>
    </>
  );
}

GetDouble.getInitialProps = async function (context) {
  const value = context.query.value;
  const response = await axios.get('http://localhost:1234' + `/api/double?value=${value}`);
  return {
    value: response.data.value,
  };
};

export default GetDouble;
