import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';
import styles from '../styles/article.module.css';

export default ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout header={post.frontmatter.title}>
          <div className={styles.contentContainer}>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
          </div>
        </Layout>

    );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} }) {
            html
            frontmatter {
                path
                title
                created
                posted
                updated
            }
        }
    }
`;
