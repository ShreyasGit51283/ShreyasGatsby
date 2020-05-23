import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'




const IndexPage = () => {
    return (
        <div>
            <Layout>
                <h1>Hello.</h1>
                <h2>Welcome to my new site.</h2>
                <p>Contact me here too <Link to="/contact" >Contact me.</Link></p>
            </Layout>

        </div>



    )
}

export default IndexPage