import React from 'react'
import { Router , Route} from 'react-router-dom'

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header'
import history from './history';


function App() {
  return (
    <div className="ui container">
      <Router history={history}>
      <Header />
      <Route path={"/"} exact component={StreamList} />
      <Route path={"/stream/new"} exact component={StreamCreate} />
      <Route path={"/stream/edit/:id"} exact component={StreamEdit} />
      <Route path={"/stream/delete/:id"} exact component={StreamDelete} />
      <Route path={"/stream/show"} exact component={StreamShow} />
      </Router>
    </div>
  );
}

export default App;
