import { Result, Button } from 'antd';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ItemType } from '../../interfaces';
import { items } from '../../constants';


function getElementsWithKey(elements: ItemType[]) {
  const result: ItemType[] = [];

  function extractElementsWithKey(arr: ItemType[]) {
    arr.forEach((item) => {
      if (item.link) {
        result.push(item);
      }
      if (item.children) {
        extractElementsWithKey(item.children);
      }
    });
  }

  extractElementsWithKey(elements);
  return result;
}

const NotFoundPage = () => {
  const location = useLocation();
  const routes = getElementsWithKey(items);

  const page = routes.find((item) => item.link === location.pathname);

  if (page) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{page.label}</h1>
        <Result
          status='warning'
          title='Under Construction'
          subTitle='This page is under construction. It will be available soon.'
        />
      </div>
    );
  }

  return (
    <Result
      status='404'
      title='404'
      subTitle="Sorry, the page you're looking for does not exist."
      extra={
        <Link to='/'>
          <Button type='primary'>Go back to the homepage</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
