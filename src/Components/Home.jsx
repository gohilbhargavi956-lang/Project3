
import { useState } from "react";
import AddBlog from "./AddBlog";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and build interactive websites.",
      author: "Bhargavi",
      date: "22 October 2026",
      content:"React is a JavaScript library used to build user interfaces. It helps developers create reusable components and interactive web applications.",
    },
    {
      id: 2,
      title: "Understanding JavaScript",
      description: "Explore JavaScript fundamentals for web development.",
      author: "Riya",
      date: "21 October 2026",
      content:"JavaScript is a programming language used to make websites interactive. It supports variables, functions, arrays, objects, and event handling.",
    },
    {
      id: 3,
      title: "Getting Started with CSS",
      description: "Learn how to style websites with colors and layouts.",
      author: "Priya",
      date: "20 October 2026",
      content:"CSS stands for Cascading Style Sheets. It is used to style web pages by adding colors, spacing, layouts, animations, and responsive designs.",
    },
  ]);

  function handleDelete(id) {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  function handleAddBlog(newBlog) {
    setBlogs([...blogs, newBlog]);
    setShowForm(false);
  }

  function handleBack() {
    setShowForm(false);
  }

  if (showForm) {
    return (
      <AddBlog onAddBlog={handleAddBlog} onBack={handleBack}/>
    );
  }

  if (selectedBlog !== null) {
    return (
      <div className="app">
        <header className="header">
          <h1>My Blog</h1>
        </header>

        <main className="blog-container">
          
          <div className="blog-card">
            <h2>{selectedBlog.title}</h2>
            <p>By {selectedBlog.author}</p>
            <p>{selectedBlog.date}</p>
            <p>{selectedBlog.description}</p>
            <p>{selectedBlog.content}</p>

            <button className="back-btn" onClick={() => setSelectedBlog(null)}>Back to Home</button>

          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>My Blog</h1>

        <button className="add-btn" onClick={() => setShowForm(true)}>Add Blog</button>
      </header>

      <section className="hero">
        <h2>Welcome to My Blog</h2>
        <p>Read interesting articles about web development. Share your knowledge with the world.</p>
      </section>

      <main className="blog-container">
        <div className="blog-heading">
          <h2>Latest Blogs</h2>
          <p>Explore our latest articles</p>
        </div>

        <div className="blog-list">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <h3>{blog.title}</h3>

              <p className="description">
                {blog.description}
              </p>

              <div className="blog-info">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <button className="read-btn" onClick={() => setSelectedBlog(blog)}>Read More</button>
              <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <p>No blogs available.</p>
        )}
      </main>

      <footer className="footer">
        <p>My Blog</p>
      </footer>
    </div>
  );
}

export default Home;
