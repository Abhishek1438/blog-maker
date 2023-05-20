import classes from './compose.module.css';

export default function () {
  return (
    <div className={classes.composeBlog}>
      <h1 className={classes.heading}>Compose your Blog</h1>
      <form action="/post-blog" method="post" enctype="multipart/form-data">
        <div className={classes.blogForm}>
          <div className={classes.blogCTitle}>
            <input
              type="text"
              name="blogTitle"
              id=""
              placeholder="Enter your blog title"
              required
            />
            <label for="image">Blog Cover Image</label>
            <input type="file" name="blogImage" required />
          </div>
          <div className={classes.blogContent}>
            <textarea name="blogContent" id="froala" cols="300" rows="100" required></textarea>
          </div>
          <button id="BfButton" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
