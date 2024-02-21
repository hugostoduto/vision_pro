import products from './products'

const Data = async ({ data }) => {
  try {
    const response = await fetch(data);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};
export default Data