import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {container, heading,navLinks,navLinkItem, navLinkText } from "./layout.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      textAlign: "center",
      paddingTop: 50,
      justifyContent: `space-between`,
  
      
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: 23,
        paddingLeft: 100,
      }}
    >
      {siteTitle}
    </Link>
    { 
    <ul className= {navLinks}>
      {/*
      <li 
        className = {navLinkItem}><Link
        to="/about"
        style={{
          fontSize: `var(--font-md)`,
        }}> 
        About
        </Link>
      </li> 
      */}
      <li 
        className = {navLinkItem}><Link to="/blog"
        style={{
          fontSize: 20,
          paddingRight: 130,
        }}> 
        Blog
        </Link>
      </li>
      
    </ul>
      }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
