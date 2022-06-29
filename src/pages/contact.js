import * as React from 'react'
import { Link } from 'gatsby'
import Layout2 from "../components/layout2"

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout2 pageTitle = "Contact Page" pageHeading = "Welcome to my Contact Page">
        This is a child property!
    </Layout2>
  )
}

// Step 3: Export your component
export default ContactPage