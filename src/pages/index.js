// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage  } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout PageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>    
        <StaticImage
          alt='Image'
          src='https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_1280.jpg'
        />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage