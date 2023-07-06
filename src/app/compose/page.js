'use client';

import { useRef, useState } from 'react';
import classes from './compose.module.css';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export default function () {
  const editor = useRef(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [content, setContent] = useState('');

  const [category, setCatogory] = useState('Technology');

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const titleChange = (e) => {
    setBlogTitle(e.target.value);
  };

  return (
    <div className={classes.composeBlog}>
      <h1 className={classes.heading}>Compose your Blog</h1>
      <form action="http://localhost:4000/blogs/add" method="post" enctype="multipart/form-data">
        <div className={classes.blogForm}>
          <div className={classes.blogCTitle}>
            <input
              type="text"
              name="blogTitle"
              value={blogTitle}
              placeholder="Enter your blog title"
              required
              onChange={titleChange}
            />
            <label for="image">Blog Cover Image</label>
            <input type="file" name="blogImage" required />
          </div>
          <div className={classes.blogContent}>
            <SunEditor
              ref={editor}
              onChange={handleEditorChange}
              placeholder="Type the Blog Content..."
              height="400px"
            />
          </div>
          <button id="BfButton" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
