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
  let newObj = {}
  let one = {}
  let two = {}
  let three = {}
  const mappedData1 = data.allMdx.nodes.map(s => {
    if (
      s.frontmatter.hero_heading_one === null &&
      s.frontmatter.services_title === null &&
      s.frontmatter.about_title !== null
    ) {
      one = {
        aboutParagraph: s.frontmatter.about_paragraph,
        aboutTitle: s.frontmatter.about_title,
      }
    }
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
    }

    if (
      s.frontmatter.hero_heading_one === null &&
      s.frontmatter.services_title !== null &&
      s.frontmatter.about_title === null
    ) {
      three = {
        ...one,
        ...two,
        servParagraph: s.frontmatter.services_paragraph,
        servTitle: s.frontmatter.services_title,
        servListHeading: s.frontmatter.serviceslist_heading,
        servList: s.frontmatter.services_list,
      }
    }

    newObj = {
      ...one,
      ...two,
      ...three,
    }

    return newObj
  })

  const homeData = mappedData1[2]

  return (
    <>
      <Layout>
        <Seo title="Home" />

        <div className={hero}>
          <div>
            <h1>{homeData.heroHeadingOne}</h1>
            <h2>{homeData.heroHeadingTwo}</h2>
            <p>{homeData.heroParagraph}</p>
            <div className={heroLinkWrapper}>
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
          <div className={heroImg}>
            <StaticImage
              src="../images/hero-img.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
            />
          </div>
        </div>

        <Services
          title={homeData.servTitle}
          paragraph={homeData.servParagraph}
          listHeading={homeData.servListHeading}
          list={homeData.servList}
        />
        <About
          title={homeData.aboutTitle}
          paragraph={homeData.aboutParagraph}
        />
        <Contact />
      </Layout>
    </>
  )
}
export default IndexPage
