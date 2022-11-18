import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

import {
  hero,
  headerdiv,
  heroImg,
  heroLinkWrapper,
} from "../styles/layout.module.css"
import About from "../components/home/about"
import Services from "../components/home/services"
import Contact from "../components/home/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allMdx {
        nodes {
          frontmatter {
            hero_heading_one
            hero_paragraph
            hero_secondary_heading
            about_paragraph
            about_paragraph_two
            about_title
            serviceslist_heading
            services_paragraph
            services_title
            services_list
          }
        }
      }
    }
  `)

  const str = JSON.stringify(data)
  const jsStr = JSON.parse(str)
  // console.log(jsStr)

  // const heroHeadingOne = jsStr.allMdx.nodes[0].frontmatter.hero_heading_one
  // const heroParagraph = jsStr.allMdx.nodes[0].frontmatter.hero_paragraph

  // const heroHeadingTwo =
  //   jsStr.allMdx.nodes[0].frontmatter.hero_secondary_heading

  // const aboutTitle = jsStr.allMdx.nodes[1].frontmatter.about_title
  // const aboutParagraph = jsStr.allMdx.nodes[1].frontmatter.about_paragraph
  // const aboutParagraphSecond =
  //   jsStr.allMdx.nodes[2].frontmatter.about_paragraph_two
  // const servParagraph = jsStr.allMdx.nodes[2].frontmatter.services_paragraph

  // const servTitle = jsStr.allMdx.nodes[2].frontmatter.services_title
  // const servListHeading = jsStr.allMdx.nodes[2].frontmatter.serviceslist_heading

  // const servList = jsStr.allMdx.nodes[2].frontmatter.services_list
  let obj = {}
  let one = {}
  let two = {}
  let three = {}
  const mappedData = jsStr.allMdx.nodes.map(s => {
    if (
      s.frontmatter.hero_heading_one === null &&
      s.frontmatter.services_title === null &&
      s.frontmatter.about_title !== null
    ) {
      one = {
        aboutParagraph: s.frontmatter.about_paragraph,
        aboutParagraphSecond: s.frontmatter.about_paragraph_two,
        aboutTitle: s.frontmatter.about_title,
      }
      return one
    }
  })

  const mappedData2 = jsStr.allMdx.nodes.map(s => {
    if (
      s.frontmatter.hero_heading_one !== null &&
      s.frontmatter.services_title === null &&
      s.frontmatter.about_title === null
    ) {
      two = {
        heroHeadingOne: s.frontmatter.hero_heading_one,
        heroParagraph: s.frontmatter.hero_paragraph,
        heroHeadingTwo: s.frontmatter.hero_secondary_heading,
      }
      return two
    }
  })

  const mappedData3 = jsStr.allMdx.nodes.map(s => {
    if (
      s.frontmatter.hero_heading_one === null &&
      s.frontmatter.services_title !== null &&
      s.frontmatter.about_title === null
    ) {
      three = {
        servParagraph: s.frontmatter.services_paragraph,
        servTitle: s.frontmatter.services_title,
        servListHeading: s.frontmatter.serviceslist_heading,
        servList: s.frontmatter.services_list,
      }
      return three
    }
  })

  console.log("obj1", one)
  console.log("obj2", two)
  console.log("obj3", three)
  // console.log("mappedData", mappedData)

  const homeData = { ...mappedData, ...mappedData2, ...mappedData3 }
  console.log("homeData", homeData)
  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className={hero}>
          <div>
            <h1>{homeData.heroHeadingOne}</h1>
            <h2>{homeData.heroHeadingTwo}</h2>
            <p>{homeData.heroParagraph}</p>
            <div className={homeData.heroLinkWrapper}>
              <Link
                to="#contact"
                style={{
                  textDecoration: `none`,
                  fontFamily: "Montserrat",
                }}
              >
                {`Contact Us`}
              </Link>
            </div>
          </div>
          <div className={heroImg}></div>
        </div>
        <div className={headerdiv}></div>

        <Services
          title={homeData.servTitle}
          paragraph={homeData.servParagraph}
          listHeading={homeData.servListHeading}
          list={homeData.servList}
        />
        <About
          title={homeData.aboutTitle}
          paragraph={homeData.aboutParagraph}
          secondParagraph={homeData.aboutParagraphSecond}
        />
        <Contact />
      </Layout>
    </>
  )
}
export default IndexPage
