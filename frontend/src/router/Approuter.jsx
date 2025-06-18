import { Routes, Route } from 'react-router-dom';
import Hero from '../Components/Hero/Hero.jsx'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Study from '../Pages/Study/Study.jsx'

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/study" element={<Study />} />

    </Routes>
  );
  
export default AppRouter; 