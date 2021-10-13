import { BrowserRouter, Switch, Route } from 'react-router-dom';

//imports components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import DetailView from './Components/Product/DetailView';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import { Box } from '@material-ui/core'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailView} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
