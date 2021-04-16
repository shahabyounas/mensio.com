import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Layout from './components/layout';


function App() {
  return (
    <div>
      <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact
            render={(routeParams) => {
              const { match } = routeParams;
          
              const urlParams = match.params;
              const pageProps = {
                ...routeParams,
                urlParams,
              };

              return ( <Layout> <route.component {...pageProps} /></Layout>);
            }}
          />
        ))}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
