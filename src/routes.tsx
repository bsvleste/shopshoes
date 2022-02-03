import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Carrinho } from './pages/Carrinho';

// eslint-disable-next-line no-undef
const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cart" component={Carrinho} />
  </Switch>
);

export default Routes;
