import * as React from 'react';
import { Link } from 'gatsby';

const AboutPage = ()=>{
    return(
        <main>
            <title>About me</title>
            <h1>About me</h1>
            <p>
                Hi there! I'm the proud creator of this site, which I built with Gatsby.
            </p>
            <Link to='/'>Go Home</Link>
        </main>
    )
};

export default AboutPage
