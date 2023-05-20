'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons';
import classes from './contact.module.css';

export default function () {
  return (
    <section className={classes.contact}>
      <h1 className={classes.sectionHeader}>Contact</h1>
      <div className={classes.contactWrapper}>
        <form id="contact-form" className={classes.formHorizontal} role="form">
          <div className={classes.formGroup}>
            <div className="col-sm-12">
              <input
                type="text"
                className={classes.formControl}
                id="name"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <div className={classes.formGroup}>
            <div className="col-sm-12">
              <input
                type="email"
                className={classes.formControl}
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <div className={classes.formGroup}>
            <div className="col-sm-12">
              <textarea
                className={`${classes.formControl} ${classes.textarea}`}
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <button
            className={`btn ${classes.primaryButton} ${classes.sendButton}`}
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className={classes.altSendButton}>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className={classes.sendText}>SEND</span>
            </div>
          </button>
        </form>

        <div className={classes.directContactContainer}>
          <ul className={classes.contactList}>
            <li className={classes.listItem}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className={`${classes.contactText} ${classes.place}`}>Chirawa, Rajasthan</span>
            </li>

            <li className={classes.listItem}>
              <FontAwesomeIcon icon={faPhone} size="sm" />
              <span className={`${classes.contactText} ${classes.phone}`}>
                <a href="9660392551" title="Give me a call">
                  9660392551
                </a>
              </span>
            </li>

            <li className={classes.listItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className={`${classes.contactText} ${classes.gmail}`}>
                <a
                  href="mailto:abhishekverma1438%40gmail.com"
                  target="_blank"
                  title="Send me an email"
                >
                  abhishekverma1438@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <hr className={classes.hr} />
          <ul className={classes.socialMediaList}>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <hr className={classes.hr} />

          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
}
