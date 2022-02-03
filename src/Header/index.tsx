/* import { MdShoppingBasket } from 'react-icons/md';
import logo from '../assets/logo.svg'; */
import {
  Link,
} from 'react-router-dom';

import { Container, Cart } from './styles';
import logo from '../assets/logo.svg';

export function Header() {
  return (

    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span> itens</span>
        </div>
      </Cart>
    </Container>

  );
}
