import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRedirect } from 'react-router-dom';
import { Provider } from 'react-redux';
// import axios from 'axios';

import store from './store';

import App from './components/App';
import CatalogueContainer from './containers/CatalogueContainer';

// import { receiveClothings } from './action-creators/categories';
// import { receiveClothings } from './action-creators/clothings';

const onAppEnter = () => {
//   const categories = axios.get('/api/categories');
//   const clothing = axios.get('/api/clothings');

  console.log('OnAppEnter called !!!');
//   return Promise
//     .all([categories, clothing])
//     .then(responses => responses.map(r => r.data))
//     .then(([retCategories, retClothings]) => {
//       store.dispatch(receiveCategories(retCategories));
//       store.dispatch(receiveClothings(retClothings));
//     });
};




export default function Root() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/designs" component={CatalogueContainer} />
          <IndexRedirect to="/designs" />
        </Route>
      </Router>
    </Provider>
  );
}
