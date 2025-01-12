import React from 'react';
import Intro from './components/intro';
import Skills from './components/skills';
import "./app.scss";
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { TimelineDemo } from './components/portfolio/TimeLineDemo/TimeLineDemo';


const App = () => {
    return (
        <div>
            
             <Intro/>
            <Skills/>
            <TimelineDemo/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;
