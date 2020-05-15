import React from 'react';
import Layout from '../../components/layout.js';
import { graphql } from 'gatsby';
import ArticleBlock from '../../components/article-block.js';
import styles from '../../styles/article.module.css';

export default ({ data }) => {

    let colors = [ '909292', '6F7171', '434445', '2E2F31', '191A1D', '2E2F31', '434445', '6F7171'];

    return (
            <Layout header={'Articles'}>
              <div className={styles.articleGrid}>
              {
                  data.allMarkdownRemark.edges.map((article, i) => {
                        article = article.node.frontmatter;
                      console.log(colors[i % colors.length]);

                      return (
                            <ArticleBlock article={article} color={colors[i % colors.length]} />
                      );
                  })
              }
              </div>

        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(limit: 9) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        updated
                        snippet
                        tags
                    }
                }
            }
        }
    }
`;
