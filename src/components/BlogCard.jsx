import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="border bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        By {blog.author} | {new Date(blog.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700 dark:text-gray-200 mb-4">
        {blog.content.substring(0, 100)}...
      </p>
      <Link
        to={`/blogs/${blog.id}`}
        className="text-primary-light dark:text-primary-dark hover:underline"
      >
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;