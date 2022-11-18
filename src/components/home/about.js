import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { useStaticQuery, graphql } from "gatsby"
import { whoWeAre, whoWeAreBody } from "../../styles/layout.module.css"

const About = ({ title, paragraph }) => {
  // const data = useStaticQuery(graphql`
  //   query AboutQuery {
  //     allMdx {
  //       nodes {
  //         frontmatter {
  //           about_paragraph
  //           about_title
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div id="about" className={whoWeAre} style={{ display: "flex" }}>
      <div className={whoWeAreBody} style={{ width: "50%" }}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <p>{paragraph}</p>
      </div>
      <div style={{ width: "50%", marginTop: "50px" }}>
        <StaticImage
          src="../../images/who-we-are.png"
          // width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
  )
}
export default About
