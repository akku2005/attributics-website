import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addBlog } from '../../services/blogService';

function BlogEditor() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newBlog = { ...data, date: new Date().toISOString() };
    await addBlog(newBlog);
    navigate('/blogs');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Write a Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('title', { required: 'Title is required' })}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            placeholder="Title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <input
            {...register('author', { required: 'Author is required' })}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            placeholder="Author Name"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
        </div>
        <div>
          <textarea
            {...register('content', { required: 'Content is required' })}
            className="w-full p-2 border rounded h-60 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            placeholder="Write your blog content..."
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default BlogEditor;