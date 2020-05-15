import React, { useState } from 'react';
import { Link } from 'gatsby';
import styles from '../styles/article.module.css';

export default ({article, color }) => {
    const [hover, setHover] = useState(false);
    let ogColor = color;

    let fontColor = 'F3F5F4';
    if(color === 'F3F5F4' || color === 'D2D4D4') {
        fontColor = '191A1D';
    }

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    if(hover) {
        fontColor = '191A1D';
        color = 'F3F5F4';
    } else {
        fontColor = 'F3F5F4';
        color = ogColor;
    }

    let tags = article.tags.split(' & ');

    return (
        <Link to={article.path} className={styles.articleLink}>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.articleContainer} style={{backgroundColor: '#' + color, color: '#' + fontColor}}>
            <h2 className={styles.titleText} style={{color: '#' + fontColor}}>{article.title}</h2>
                <p className={styles.snippetText}>{article.snippet}</p>
                <div className={styles.infoContainer}>
                  <p className={styles.updatedText}>{article.updated}</p>
                  <span>{'  ----  '}</span>
                    <div className={styles.tagsContainer}>
                    {
                        tags.map(tag => {
                            return <p className={styles.tagText}>{tag} </p>;
                        })
                    }
                </div>
            </div>
          </div>
        </Link>
    );
}
