import Header from './components/Header';
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Switch } from "react-router";
import { Container } from '@mui/system';
import Trending from './pages/Trending/Trending';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
      <Container>
        <Routes>
          <Route path='/' component = {Trending} exact/>
          <Route path='/movies' component = {Series}/>
          <Route path='/series' component = {Movies}/>
          <Route path='/search' component = {Search}/>
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
