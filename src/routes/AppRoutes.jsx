import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Partners from '../pages/Partners';
import Services from '../pages/Services';
import BlogList from '../pages/Blogs/BlogList';
import BlogPost from '../pages/Blogs/BlogPost';
import BlogEditor from '../pages/Blogs/BlogEditor';
import ContactUs from '../pages/ContactUs';


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/what-we-do" element={<Services />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/blogs/new" element={<BlogEditor />} />
        <Route path="/contact" element={<ContactUs />} />
       
      </Route>
    </Routes>
  );
}

export default AppRoutes;