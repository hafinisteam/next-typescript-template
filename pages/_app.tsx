import '../styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Layout from 'components/Layout'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
