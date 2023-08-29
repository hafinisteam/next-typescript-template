import Head from 'next/head'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>FE test</title>
        <meta name="description" content="FE test" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta key="type" property="og:type" content="website" />
        <meta key="title" property="og:title" content="FE test" />
        <meta name="apple-itunes-app" content="app-id=1618973426" />
        <meta key="description" property="og:description" content="FE test" />
        <meta
          key="twittercard"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
