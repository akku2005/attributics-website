export const addBlog = (blog) => {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const newBlog = { ...blog, id: Date.now().toString() };
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return newBlog;
  };
  
  export const getBlogs = () => {
    return JSON.parse(localStorage.getItem('blogs') || '[]');
  };
  
  export const getBlogById = (id) => {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    return blogs.find((blog) => blog.id === id) || null;
  };