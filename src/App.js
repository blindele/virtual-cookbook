import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Create from './Components/Pages/Create';
import Home from './Components/Pages/Home';
import { APIContextProvider } from './Components/useContext';
import RecipeDetails from './Components/Pages/RecipeDetails';

function App() {
  return (
    <APIContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
      </Routes>
    </Router>
    </APIContextProvider>
  );
}

export default App;