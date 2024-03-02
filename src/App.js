import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import Contact from './components/Contact'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<ProjectPage/>}/>
      <Route path='/Blogs' element={<BlogPage/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
