import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../services/blogService';
import BlogCard from '../../components/BlogCard';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Blogs</h1>
        <Link
          to="/blogs/new"
          className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded"
        >
          Write a Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;