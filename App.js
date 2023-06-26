import {Fragment} from 'react';
import {useSelector} from 'react-redux';
import Counter from  './components/Counter';
import Header from './components/Header';
import  Auth from './components/Auth.js';
import  UserProfile from './components/UserProfile';


function App() {
  useSelector(state => state.auth);
  return (
    <Fragment>
      <Header />
      <Auth />
    <Counter/>
    </Fragment>
  );
}

export default App;