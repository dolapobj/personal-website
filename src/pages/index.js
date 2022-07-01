import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Button from '../components/button'

const IndexPage = () => (
  <Layout pageHeading="Home Page" pageTitle = "Home">
    <Seo title="Home" keywords={[`MIT`, `computer science`, `CS`]} />
    <body
    style={{
      fontFamily: "sans-serif"
      
    }}>
    <div id='holder'>
        <div id='left'></div>
        <div id='middle'>
            <h1 style={{ fontFamily: "sans-serif",paddingRight : '5px'}}>Hi! I'm Dolapo Adedokun.</h1>
            <p>I'm a <a href="https://news.mit.edu/2021/adedolapo-adedokun-mitchell-scholar-1122"> Mitchell Scholar</a> at Trinity College Dublin and I studied CS at MIT. In the past I've worked on: </p>
            <ul>
                <li>Nonce Features in Reference Games (<a href="Nonce-Features-Reference-Games.pdf"><em>paper</em></a>) </li>
                <li>reinventing internal data management at Salesforce</li>
                <li>internal tool development at Slack</li>
                <li>improving data pipeline migration at Visa</li>
                <li>reinforcement learning at the MIT Quest for Intelligence</li>
            </ul>
            I love jazz guitar, piano, singing, and learning Japanese. Connect with me!
        </div>
        <div id='right'></div>
    </div>
    </body>

  </Layout>

)

export default IndexPage
