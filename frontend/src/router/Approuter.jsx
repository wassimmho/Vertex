import { Routes, Route } from 'react-router-dom';
import Study from '../Pages/Study/Study.jsx'
import Home from '../Pages/Home/Home.jsx';
import Questions from '../Pages/Questions/Questions.jsx'
import Login from '../Pages/Login/Login.jsx'
import Signin from '../Pages/Signin/Signin.jsx'
import Response from '../Pages/Response/Response.jsx';
import NewFeature from '../Pages/Feature/Feature.jsx';
const AppRouter = () => (
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/study" element={<Study />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/response" element={<Response />} />
      <Route path="/new-feature" element={<NewFeature />} />
    </Routes>
  );
  
export default AppRouter; 