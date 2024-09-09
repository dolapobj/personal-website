import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    file(name: {eq: "Nonce-Features-In-Reference-Games"}) {
      publicURL
    }
  }
  `)

  return (
    <Layout pageHeading="Dolapo Adedokun - Home Page" pageTitle="Dolapo Adedokun - Home">
      <Seo
        title="Dolapo Adedokun"
        keywords={[`gatsby`, `dolapo adedokun`, `application`, `react`, `dolapo`, `adedokun`, `blog`, `MIT`, `jazz`, `cs`, `computer science`]}
      />
      <div id="black-cover"></div>
      <div id="content">
        
        <div id="holder">
          <div id="middle">
            <h1> Hi! I'm Dolapo Adedokun.</h1>
            <p>I'm a <a href="https://news.mit.edu/2021/adedolapo-adedokun-mitchell-scholar-1122"> Mitchell Scholar</a> at Trinity College Dublin and I studied CS at MIT.</p>
            <p>In the past I've worked on:</p>
            <ul>
              <li>Nonce Features in Reference Games (<a href={data.file.publicURL}><em>paper</em></a>)</li>
              <li>Reinventing internal data management at Salesforce</li>
              <li>Internal tool development at Slack</li>
              <li>Improving data pipeline migration at Visa</li>
              <li>Reinforcement learning at the MIT Quest for Intelligence</li>
              <li><a href="https://www.exeter.edu/news/capturing-color">Colored Seeds</a>, a photography project from 2018</li>
            </ul>
            I love gospel and jazz guitar, piano, singing, and learning Japanese. Connect with me!
          </div>
          <div id="right">
            <img src="/thumb1.png" alt="Thumbnail"  />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

