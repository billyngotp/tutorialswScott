import React from 'react'
import hxh from "../assets/gonkillua.jpg"
import {Users} from "./Users.js"

const News = () => {
    return(
        <>
        <div> This is the news section </div>
        <img alt = "gonkillua" src = {hxh}/> 
        <Users/>
        </>

    )
}

export default News;