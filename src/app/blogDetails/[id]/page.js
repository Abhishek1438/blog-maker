'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './blogDetails.module.css';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '@/app/context/user';

export default function ({ params }) {
  const [blog, setBlog] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/blogs/addComment/${blog._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authorName: user.name,
        message: comment,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setBlog(data);
    } else {
      console.log(data.message);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      const id = params.id;
      const response = await fetch(`http://localhost:4000/blogs/${id}`, {
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        setBlog(data);
      } else {
        console.log(data.message);
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className={classes.blogDetails}>
      <div className={classes.topBackground}></div>
      <div className={classes.header}>
        <h3>Technology</h3>
        <h1>{blog.title}</h1>
        <img
          src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="blog-image"
        />
        <div className={classes.author}>
          <div className={classes.authorImg}>{blog.blogAuthor?.charAt(0)}</div>
          <div className={classes.authorDetails}>
            <h3>{blog.blogAuthor}</h3>
            <p>{blog.date}</p>
          </div>
          <div className={classes.shareIcon}>
            <FontAwesomeIcon icon={faShareNodes} style={{ color: '#ffffff' }} size="2xl" />
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
      <div className={classes.commentContainer}>
        <h2>Comments</h2>
        {blog.comments?.map((comment) => {
          return (
            <div className={classes.comment}>
              <div className={classes.author}>
                <div className={classes.authorImg}>A</div>
                <div className={classes.authorDetails}>
                  <h3>{comment.authorName}</h3>
                  <p>{comment.date}</p>
                </div>
              </div>
              <p className={classes.commentText}>{comment.message}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.createComment}>
        <form>
          <textarea
            placeholder="write a comment"
            name="message"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" onClick={addCommentHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
