'use client';

import classes from './blogs.module.css';
import BlogLarge from '../components/BlogLarge';
import BlogSmall from '../components/BlogSmall';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';

export default function () {
  const [blogsArray, setBlogsArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:4000/blogs', {
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        setBlogsArray(data);
      } else {
        console.log(data.message);
      }
    };

    fetchBlogs();
  }, []);
  console.log(blogsArray);

  return (
    <div className={classes.blogsContainer}>
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
          slidesToShow={1}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 20,
              background: 'white',
              cursor: 'pointer',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
            };
            const style = isSelected
              ? { ...defStyle, border: '3px solid #1b282c' }
              : { ...defStyle };
            return (
              <div
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              ></div>
            );
          }}
        >
          {blogsArray.slice(0, 5).map((blog) => (
            <div>
              <BlogLarge blog={blog} />
            </div>
          ))}
        </Carousel>
      </div>

      <h2 className={classes.blogsTitle}>Blogs</h2>
      <div className={classes.smallBlogsContainer}>
        {blogsArray.map((blog) => (
          <div>
            <BlogSmall blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
