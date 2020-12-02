import React from 'react'
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CompressImage from '../pages/CompressImage';
import CompressText from '../pages/CompressText';
import AllFiles from '../pages/AllFiles';
import '../index.css'

function Main() {
    return (
        <>
            <Navbar />
            <Route path="/" exact component={CompressImage} />
            <Route path="/text" exact component={CompressText} />
            <Route path="/allfiles" exact component={AllFiles} />
        </>
    )
}

export default Main
