import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../services/blogService';

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(id);
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div className="max-w-4xl mx-auto p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        By {blog.author} | {new Date(blog.date).toLocaleDateString()}
      </p>
      <div className="prose dark:prose-invert">{blog.content}</div>
    </div>
  );
}

export default BlogPost;