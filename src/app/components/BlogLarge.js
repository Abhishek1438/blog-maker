import classes from './BlogLarge.module.css';

export default function () {
  return (
    <div className={classes.container}>
      <div className={classes.parent}>
        <div className={classes.child}>
          <h2>Article processing charge (APC) paying options</h2>
          <p>
            The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
