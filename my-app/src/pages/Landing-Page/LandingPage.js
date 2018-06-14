import React, { Component } from 'react';
import Content from '../content/Content';
import Header from '../../header/Header';
import Skills from '../skills/Skills';
import Footer from '../../footer/Footer';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Skills />
                <Footer />
            </div>
        )
    }
}

export default LandingPage