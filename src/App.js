import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Create from './Components/Pages/Create';
import Home from './Components/Pages/Home';
import RecipeDetails from './Components/Pages/RecipeDetails';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;