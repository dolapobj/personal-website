import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {container, heading,navLinks,navLinkItem, navLinkText } from "./layout.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`,
      }}
    >
      {siteTitle}
    </Link>
    <ul className= {navLinks}>
      <li 
        className = {navLinkItem}><Link
        to="/about"
        style={{
          fontSize: `var(--font-md)`,
        }}> 
        About
        </Link>
      </li>
      <li 
        className = {navLinkItem}><Link to="/blog"
        style={{
          fontSize: `var(--font-md)`,
        }}> 
        Blog
        </Link>
      </li>
      <li 
        className = {navLinkItem}><Link to="/projects"style={{
          fontSize: `var(--font-md)`,
        }}> 
        Projects
        </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
