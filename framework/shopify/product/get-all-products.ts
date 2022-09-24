import { getAllProductsQuery } from '../utils/queries/getAllProducts';

type fetchParams = {
  query: string;
};

const fetchApi = async ({ query }: fetchParams) => {
  const url = 'http://localhost:4000/graphql';

  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const jsonData = await data.json();

  return jsonData;
};

const getAllProducts = async (): Promise<any[]> => {
  const apiData = await fetchApi({ query: getAllProductsQuery });

  return apiData;
};

export default getAllProducts;
