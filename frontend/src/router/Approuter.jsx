import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar.jsx'
import Study from '../Pages/Study/Study.jsx'
import Home from '../Pages/Home/Home.jsx';

const AppRouter = () => (
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/study" element={<Study />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  );
  
export default AppRouter; 