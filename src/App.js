import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Favorite from './component/Favorite';
import {BrowserRouter as Router,Switch,Route,BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <switch>
        <Route path='/' exact render={(props)=>(
          <>
          <Banner {...props}/>
          <Movies {...props}/>
          </>
        )}/>
        <Route path='/favorites' component={Favorite} />
      </switch>
      {/* <Banner/>
      <Movies/>
      <Favorite/> */}
    </Router>
     
  );
}

export default App;
