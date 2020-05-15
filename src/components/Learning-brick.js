import React, { useState } from "react";
import styles from "../styles/learning.module.css";
import Image from "./dynamicImage.js";

export default ({ title, author, kind, link, year, tags, brickColor, imgName}) => {
    const [hover, setHover] = useState(false);

    let fontColor = 'F3F5F4';
    if(brickColor === 'F3F5F4') {
        fontColor = '191A1D';
    }

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
          <a href={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={kind === 'book' ? styles.singleBrick : styles.doubleBrick} style={{backgroundColor: '#' + brickColor, color: '#' + fontColor}}>
          {
              !hover ? (
                  <div className={kind === 'book' ? styles.brick : styles.doubleBrickNotHover}>
                    <div className={styles.brickTitleContainer}>
                        <p className={styles.brickTitle}>{title}</p>
                    </div>
                    <div className={styles.brickAuthorContainer}>
                        <p className={styles.brickAuthor}>{author}</p>
                    </div>
                  </div>
              ) : (
                  kind === 'course' ?
                      <div className={styles.doubleBrickHover} style={{backgroundColor: '#3498db'}}>
                    <div className={styles.brickTitleContainer}>
                      <p className={styles.brickTitle}>{title}</p>
                    </div>
                    <div className={styles.brickAuthorContainer}>
                      <p className={styles.brickAuthor}>{author}</p>
                    </div>
                  </div>
                      :
                  <div className={styles.imgContainer}>
                    <Image alt={''} filename={imgName + '.png'} />
                </div>
              )
          }
        </a>
    );
}
