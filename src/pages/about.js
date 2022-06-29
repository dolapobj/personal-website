import * as React from 'react'
import { Link } from 'gatsby'
import Layout2 from "../components/layout2"

// Step 2: Define your component
const aboutPage = () => {
  return (
    <Layout2 pageHeading="About Page" pageTitle = "AP">
        Hi! I'm Dolapo.
    </Layout2>
  )
}

// Step 3: Export your component
export default aboutPage