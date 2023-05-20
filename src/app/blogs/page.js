'use client';

import classes from './blogs.module.css';
import BlogLarge from '../components/BlogLarge';
import BlogSmall from '../components/BlogSmall';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function () {
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
          <div>
            <BlogLarge />
          </div>
          <div>
            <BlogLarge />
          </div>
          <div>
            <BlogLarge />
          </div>
        </Carousel>
      </div>

      <div className={classes.smallBlogsContainer}>
        <h2>Blogs</h2>
        <BlogSmall />
      </div>
    </div>
  );
}
