import classes from './BlogDashboard.module.css';

export default function () {
  return (
    <div className={classes.container}>
      <div className={classes.parent}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="blog-image"
          />
        </div>
        <p>10 Jan, 2019</p>
        <h3>Fundament rock & material understanding for civil and mining engineers</h3>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
