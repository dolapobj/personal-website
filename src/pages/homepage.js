// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout2 from "../components/layout2"
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const HomePage = () => {
  return (
    <Layout2 pageHeading="Home Page" pageTitle = "HP!!!!">
        Welcome to the Home Page!
        
    </Layout2>
  )
}

// Step 3: Export your component
export default HomePage