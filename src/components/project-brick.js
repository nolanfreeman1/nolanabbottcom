import React, { useState }from "react";
import styles from "../styles/projects.module.css";
import Image from './dynamicImage.js';
import ImageGrey from './dynamicImageGreyscale.js';
import { Link } from 'gatsby';

export default ({ brickColor, title, status, tags, links, font, images, kind, desc, themePrimary}) => {
    const [hoverInfo, setHoverInfo] = useState(false);
    const [hoverBrick, setHoverBrick] = useState(false);
    let randomColor = brickColor;

    let fontColor = 'F3F5F4';
    if(brickColor === 'F3F5F4') {
        fontColor = '191A1D';
    }
    let defaultFontColor = fontColor;

    const handleMouseEnterBrick = () => {
        setHoverBrick(true);
    };

    const handleMouseLeaveBrick = () => {
        setHoverBrick(false);
        setHoverInfo(false);
    };

    const handleMouseToggleInfo = () => {
        if (hoverInfo) {
            setHoverInfo(false);
        } else {
            setHoverInfo(true);
        }
    };

    if (hoverBrick) {
        console.log(themePrimary);
        brickColor = '#' + themePrimary;
        fontColor = '#' + 'F3F5F4';
    } else {
        brickColor = '#' + randomColor;
        fontColor = '#' + defaultFontColor;
    }

    return (
        <div onMouseEnter={handleMouseEnterBrick} onMouseLeave={handleMouseLeaveBrick} className={styles.brick} style={{backgroundColor: brickColor, color: fontColor}}>
          {
          // status indicator in top corner
              !hoverBrick ? (
                  <div className={styles.brickLeftContainer}>
                    <p  style={{fontFamily: font}} className={font === 'retro' ? styles.brickTitleLarger : styles.brickTitle}>{title}</p>
                    <div className={styles.brickRightContainer}>
                      <p className={styles.brickKind}>{kind}</p>
                      <div className={styles.tagImagesContainer}>
                      {
                          Array.isArray(tags) ?
                              tags.map(tag => {
                              return (
                                  <div className={styles.tagImageContainer}>
                                    <ImageGrey alt={tag} filename={ tag.toLowerCase() + '-logo' + '.png'} />
                                  </div>
                              );
                          })
                              : (
                                   <div className={styles.tagImageContainer}>
                                     <ImageGrey alt={tags} filename={ tags.toLowerCase() + '-logo' + '.png'} />
                                   </div>
                              )
                      }
                      </div>
                    </div>
                  </div>
              ) : (
                  <div className={styles.projectBrickHoveredCardContainer}>
                    {
                    
                        hoverInfo ? (
                            <div className={styles.hoverInfoImageContainerContainer}>
                              {
                                  images.map(image => {
                                      return (
                                          <div className={styles.hoverInfoImageContainer}>
                                            <Image alt="" filename={image + '.png'} />
                                          </div>
                                      );
                                  })
                              }
                            </div>
                        ) : (
                            <p className={styles.hovercardDesc}>{desc}</p>
                        )
                    }
                    <div className={styles.projectLinkContainer}>
                    {
                        Object.entries(links).map(kvp => {
                            return (
                                kvp[0] === 'meta' ?
                                    (
                                        <div className={styles.projectLinkItemContainer} onMouseDown={handleMouseToggleInfo}>
                                          <Image alt={kvp[0] + ' link image'} filename={kvp[0] + '-logo' + '.png'} />
                                        </div>
                                    ) : (
                                        <a href={kvp[1]} className={styles.projectLinkItemContainer}>
                                            <Image alt={kvp[0] + ' link image'} filename={kvp[0] + '-logo' + '.png'} />
                                        </a>
                                    )
                            );
                        })
                    }
                    </div>
                  </div>
              )
          }
        </div>
    );
}
