import React from "react";
import styles from '../styles/footer.module.css';
import Image from '../components/dynamicImage.js';
import {Link} from 'gatsby';
export default () => {
    return (
        <div className={styles.footerContainer}>
          <div className={styles.imgContainerContainer}>
            <div className={styles.imgContainer}>
              <a href="https://github.com/nolanfreeman"><Image alt="Github Link Image" filename='github-logo.png' /></a>
            </div>
            <div className={styles.imgContainer}>
              <a href="https://twitter.com/nolanfreeman"><Image alt="Twitter Link Image" filename='twitter-logo.png' /></a>
            </div>
            <div className={styles.imgContainer}>
              <Link to="/cv.pdf"><Image alt="Resume Link Image" filename='resume-logo.png' /></Link>
            </div>
            </div>
          <p>nolan@nolanabbott.com</p>
        </div>
    );
}
