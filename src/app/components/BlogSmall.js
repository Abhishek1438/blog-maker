import classes from './BlogSmall.module.css';
import Link from 'next/link';

export default function ({ blog }) {
  return (
    <Link href={`blogDetails/${blog._id}`}>
      <div className={classes.parent}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="blog-image"
          />
        </div>
        <p>{blog.date}</p>
        <h3>{blog.title}</h3>
      </div>
    </Link>
  );
}
