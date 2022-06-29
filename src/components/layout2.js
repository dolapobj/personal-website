import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container, 
  heading,
  navLinks,
  navLinkItem, 
  navLinkText, 
  siteTitle 
} from "./layout.module.css"


const Layout2 = ({pageTitle, pageHeading, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main className= {container}>
      <title>{pageTitle} | {data.site.siteMetadata.title} </title>
      <p className={siteTitle}> {data.site.siteMetadata.title}</p>
      <nav>
        <ul className= {navLinks}>
        <li className = {navLinkItem}><Link to="/blogs"className={navLinkText}> Blogs</Link></li>
        <li className = {navLinkItem}><Link to="/homepage"className={navLinkText}> Home Page</Link></li>
          <li className = {navLinkItem}><Link to="/"className={navLinkText}> Home</Link></li>
          <li className = {navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className = {navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
        </ul>
      </nav>
      <h1 className = {heading}>{pageHeading}</h1>
      {children}
    </main>
  )
}

// Step 3: Export your component
export default Layout2