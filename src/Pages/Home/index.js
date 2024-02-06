import React from 'react'
import Title from './Features/Title'
import LatestPost from './Features/LatestPost'
import Advertisement from './Features/Advertisement'
import './style.css'

const Home = () => {
    return (
        <div>
            <Title />
            <LatestPost />
            <Advertisement />
        </div>
    )
}

export default Home