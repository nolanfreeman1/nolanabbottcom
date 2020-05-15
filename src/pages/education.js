// learning.js

import React from "react";
import Layout from "../components/layout";
import LearningBrick from "../components/learning-brick";
import learningData from  "../../content/learnings-content.yaml";
import styles from "../styles/learning.module.css";

let brickColors = ['F3F5F4', '434445', '2E2F31', '191A1D', '6F7171'];
export default () => {
    let content = learningData.content;

    shuffleArray(content);
    return (
        <Layout header={learningData.header}>
          <div className={styles.gridContainer}>
          <div className={styles.learningGrid}>
            {
                content.map(item => {
                    item = item.item;
                    let brickColor = brickColors[Math.floor(Math.random() * brickColors.length)];
                    return (
                        <LearningBrick title={item.title} author={item.author} kind={item.kind} link={item.link} year={item.year} tags={item.tags} brickColor={brickColor} imgName={item.img} />
                    );
                })
            }
          </div>
        </div>
        </Layout>
    );
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // let lineCount = 0;
    // for (let i = 0; i < array.length; i++) {
        // if (array[i].kind === 'book') {
            // lineCount++;
        // } else {
            // lineCount+=2;
        // }
        // if (lineCount === width && i+1 % width !== 0) {
            // let poppedItem = fillerItems.pop();
            // array.splice(i, 0, fillerItems.poppedItem);
            // lineCount = 0;
        // }
    // }
}
