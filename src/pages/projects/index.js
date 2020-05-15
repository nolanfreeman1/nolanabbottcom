import React from "react";
import Layout from "../../components/layout";
import projectData from '../../../content/projects-content.yaml';
import styles from "../../styles/projects.module.css";
import ProjectBrick from "../../components/project-brick";

let brickColors = ['F3F5F4', '434445', '2E2F31', '191A1D', '6F7171'];

export default () => {
    let content = projectData.content;

    shuffleArray(content);
    return (
            <Layout header={projectData.header}>
        <div className={styles.gridContainer}>
          <div className={styles.projectsGrid}>
            {
                content.map(item => {
                    item = item.item;
                    let brickColor = brickColors[Math.floor(Math.random() * brickColors.length)];
                    return (
                        <ProjectBrick brickColor={brickColor} title={item.title} status={item.status} tags={item.tags} links={item.links} font={item.font} images={item.imgs} kind={item.kind} desc={item.desc} themePrimary={item.primarycolor} />
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
}
