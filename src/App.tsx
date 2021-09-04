import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

interface AppProps {}

const App = (props: AppProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
