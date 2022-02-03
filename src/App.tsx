import {
  BrowserRouter,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from './Header';
import { CartProvider } from './hook/useCart';
import Routes from './routes';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes />
        <ToastContainer autoClose={2000} />
      </CartProvider>
    </BrowserRouter>

  );
}
