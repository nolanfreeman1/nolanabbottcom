const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;
    const template = path.resolve('src/templates/article.js');

    return graphql(`{
       allMarkdownRemark {
        edges {
            node {
                html
                    id
                    frontmatter {
                        path
                        title
                        created
                        posted
                        updated

                    }

                }

            }

        }
    }`)
        .then(res => {
            if(res.errors) {
                return Promise.reject(res.errors);
            }

            res.data.allMarkdownRemark.edges.forEach(({node}) => {
                let path = node.frontmatter.title;
                    path = '/content/articles/' + path.replace(/\s/g, "-");
                createPage({
                    path: path,
                    component: template
                });
            });
        });
}
