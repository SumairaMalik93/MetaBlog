import React from 'react'
import LatestPost from '../Home/Features/LatestPost'

const BlogListing = () => {
    return (
        <div className="container text-center  ">
            <div className="text-center my-5 PageTitle">
                <h2 className="text-center">Page Title</h2>
                <ul className="justify-content-center ">
                    <li>Home</li>
                    <li>Link One</li>
                </ul>
            </div>
            <LatestPost />
        </div>
    )
}

export default BlogListing