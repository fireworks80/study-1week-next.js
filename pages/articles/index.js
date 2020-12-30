// /articles라는 디렉토리로 접근 하게 되면
// index.js파일이 출력된다.
import ArticleList from '../../components/views/ArticleList';
export default function Page(props) {
  return <ArticleList {...props} />;
}

Page.getInitialProps = async function () {
  // await axios
  return {
    list: [],
  };
};
