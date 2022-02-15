/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useCart } from '../../hook/useCart';

import { api } from '../../Services/api';
import { Stock } from '../../types';

import { ProductList } from './styles';

interface Product{
  id: number,
  title: string,
  price: number,
  image: string
}
interface CartItemsAmount{
  [key:number]:number;
}
export function Home() {
  const { addProduct, cart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  useEffect(() => {
    api.get('produtos')
      .then((response) => setProducts(response.data.attributes));
  }, []);
 
  async function handleAddProduct(id:number) {
    await addProduct(id);
  }
  return (
    <ProductList>
      {products.map((product) => (

        <li key={product.id}>
          <img src={product.image} alt="{product.title}" />
          <strong>{product.title}</strong>
          <span>
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdShoppingCart size={36} color="#f18c" />
              {cartItemsAmount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRIHO</span>
          </button>
        </li>
      ))}

    </ProductList>
  );
}
