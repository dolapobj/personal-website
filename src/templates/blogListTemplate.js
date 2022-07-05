import React from 'react';
import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage}  from 'gatsby-plugin-image';
import {container, heading,navLinks,navLinkItem, navLinkText } from "../components/layout.module.css"

const BlogPage = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, numPages } = pageContext;
    const pathPrefix = '..';
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1
        ? `${pathPrefix}/`
        : `${pathPrefix}/${(currentPage - 1).toString()}`;
    const nextPage = currentPage === 1 ? `${"../blog"}/${(currentPage + 1).toString()}`
    : `${"../"}${(currentPage + 1).toString()}`;
    return (
        <Layout>
          <h1> Blog </h1>
          <div className="post-list">
            {posts.map(post => (
              <div key={post.node.id} className="post-list__item">
                <div className="post-list__thumbnail">
            </div>
            <div className="post-list__content">  
                <Link to={post.node.fields.slug}>
                <h2 style={{marginBottom: 3}}>
                {post.node.frontmatter.title}
                </h2>
                </Link>
                {post.node.frontmatter.tags ? (
                <div style={{marginBottom:1}}className="container">
                  {post.node.frontmatter.date} {"|"}
                  <ul className  = {navLinks} style={{marginBottom:2, marginLeft: 10,listStyle: 'none',display: 'inline-block'}}>
                    {post.node.frontmatter.tags.map(tag => (
                      <li style={{marginRight: 10,display: 'inline-block'
                      }}key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> {` `}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
                <p style={{marginTop:4}}className="post-list__excerpt">
                  {post.node.excerpt}
                </p>
            </div>
          </div>
        ))}
      </div>
      <div className="page-navigation">
        {!isFirst && (
          <Link to={prevPage} rel="prev" style={{paddingRight: 50}}>
            ← Previous Page
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`${"/blog"}/${i === 0 ? '' : i + 1}`}
            style={{paddingRight: 10}}
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next" style={{paddingleft: 60}}>
            Next Page →
          </Link>
        )}
      </div>
    </Layout>
  );
};
export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
query($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              childImageSharp { 
                gatsbyImageData(
                  width:200
                  placeholder: BLURRED
                  )
              }
            }
          }
        }
      }
    }
  }
`;