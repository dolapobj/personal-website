/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Header from "./header"
import "./layout.css"
import '../styles/styles.scss';


const Layout = ({ pageTitle, pageHeading, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class = "container"
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            gridArea: 'footer',
          }}
        >
   
          © dolapobj[at]gmail.com  {` `}
          <div class = "container" 
          style={{display: "inline-block", verticalAlign: 'middle', float:"right",display: "grid",
          gridAutoFlow: "column",
          gridColumnGap: 7}}>
          {` `}
          <a href="https://www.linkedin.com/in/dolapobj/"> 
          <StaticImage
            src="../images/icons/linkedin.png"
            alt="linkedin"
            placeholder="blurred"
            layout="fixed"
            width={20}
            height={20}
            style={{display: "inline-block", verticalAlign: 'middle', paddingRight: 20}}
          /> 
          </a>
          {``}
          <a href="https://www.twitter.com/dolapobj/">  
          <StaticImage
            src="../images/icons/twitter.png"
            alt="twitter"
            placeholder="blurred"
            layout="fixed"
            width={20}
            height={20}
            objectPosition = ''
            style={{display: "inline-block", verticalAlign: 'middle'}}
          /></a>
          {` `}
          <a href="https://github.com/dolapobj"> <StaticImage
            src="../images/icons/github.png"
            alt="twitter"
            placeholder="blurred"
            layout="fixed"
            width={20}
            height={20}
            objectPosition = ''
            style={{display: "inline-block", verticalAlign: 'middle'}}
          /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
