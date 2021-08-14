import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

const AboutPage = ()=>{
    return(
        <Layout PageTitle='About me'>
            <p>
                Hi there! I'm the proud creator of this site, which I built with Gatsby.
            </p>
            <StaticImage
                alt='Image'
                src='../images/landscape.jpg'
            />
        </Layout>
    )
};

export default AboutPage
