import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
        allFile(filter: {name: {eq: "Nonce-Features-In-Reference-Games"}}) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
  `)
  return (
    <Layout>
      <h1>PDF Downloads</h1>
      <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export default DownloadsPage