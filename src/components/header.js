import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { headerStyles, header, contactBtn } from "../styles/layout.module.css"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div>
      <StaticImage
        src="../../src/images/bt-logo.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
      />
      <div className={headerStyles} style={{ marginTop: "10px" }}>
        <Link
          to="#about"
          style={{
            textDecoration: `none`,
            fontFamily: "Montserrat",
            marginRight: `20px`,
          }}
        >
          {`Who We Are`}
        </Link>
        <Link
          to="#services"
          style={{
            textDecoration: `none`,
            fontFamily: "Montserrat",
          }}
        >
          {`What We Do`}
        </Link>
        <Link
          to="#contact"
          className={contactBtn}
          style={{
            textDecoration: `none`,
            fontFamily: "Montserrat",
            marginLeft: "20px",
          }}
        >
          {`Contact`}
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
