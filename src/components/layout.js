import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            reddit
          }
        }
      }
    }
  `)

  const { location, title, children } = props
  const { social } = data.site.siteMetadata
  const { twitter, instagram, reddit } = social
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` and ❤️`}
        <p>
          <a href={`https://www.twitter.com/${twitter}`}>{"Twitter"}</a>
          {` ••🚀•• `}
          <a href={`https://www.reddit.com/user/${reddit}`}>{"Reddit"}</a>
          {` ••🛰•• `}
          <a href={`https://www.instagram.com/${instagram}`}>{"Instagram"}</a>
        </p>
      </footer>
    </div>
  );
}

export default Layout
