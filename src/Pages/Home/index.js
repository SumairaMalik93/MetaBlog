import React from 'react'
import Title from './Features/Title'
import LatestPost from './Features/LatestPost'
import Advertisement from './Features/Advertisement'
import './style.css'

const Home = () => {
    return (
        <div>
            <Title />
            <Advertisement />
            <div className="container-xs container-sm container-md container-lg my-3">
                <h4>Latest Post</h4>
            </div>
            <LatestPost />
            <Advertisement />

        </div>
    )
}

export default Home