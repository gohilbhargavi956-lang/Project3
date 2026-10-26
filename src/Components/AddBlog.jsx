import { useState } from "react";

function AddBlog(props) {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [description, setdescription] = useState("");
  const [content, setcontent] = useState("");

  function handlesumbit(e) {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title: title,
      author: author,
      description: description,
      content: content,
    };

    props.onAddBlog(newBlog);
  }

  return (
    <div className="add-blog-form">
      <h2>Add New Blog</h2>

      <form onSubmit={handlesumbit}>
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input type="text" id="title" placeholder="Enter blog title" value={title} onChange={(e) => settitle(e.target.value)} required/>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input type="text" id="author" placeholder="Enter author name" value={author}onChange={(e) => setauthor(e.target.value)}required/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Blog Description</label>
          <textarea id="description" placeholder="Enter blog description"value={description}onChange={(e) => setdescription(e.target.value)}required/>
        </div>

        <div className="form-group">
          <label htmlFor="content">Blog Content</label>
          <textarea id="content"placeholder="Enter blog content"value={content} onChange={(e) => setcontent(e.target.value)}required/>
        </div>

        <button type="submit" className="publish-btn">Publish Blog</button>

        <button className="back-btn"type="button" onClick={props.onBack}>Back to Home</button>
      </form>
    </div>
  );
}

export default AddBlog;
