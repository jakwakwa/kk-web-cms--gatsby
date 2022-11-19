/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { layoutstyles } from "../styles/layout.module.css"

import Header from "./header"
import "./layout.css"

import { footer } from "../styles/layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={layoutstyles}>{children}</div>
      <footer
        className={footer}
        style={{
          marginTop: `2rem`,
          backgroundColor: `#416D75`,
          color: `white`,
        }}
      >
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.doodlesdigital.co.za">Doodles Digital</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
