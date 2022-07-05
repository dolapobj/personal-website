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
      paddingTop: `var(--size-gutter)`,
      justifyContent: `space-between`,
      verticalAlign: "bottom",
      width: '100%',
      
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-xl)`,
        display: 'inlineblock'
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
          fontSize: `var(--font-xl)`,
          display: 'inline-block'
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
