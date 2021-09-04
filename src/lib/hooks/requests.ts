const API_URL = 'http://localhost:5000/v1';

export const httpGetAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  return await response.json();
};
