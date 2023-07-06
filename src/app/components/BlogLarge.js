import Link from 'next/link';
import classes from './BlogLarge.module.css';

export default function ({ blog }) {
  return (
    <div className={classes.container}>
      <div className={classes.parent}>
        <div className={classes.child}>
          <h2>{blog.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog.content.substr(0, 500) + '...' }} />
          <Link href={`/blogDetails/${blog._id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
