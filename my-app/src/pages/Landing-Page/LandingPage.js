import React, { Component } from 'react';
import Content from '../content/Content';
import Header from '../../header/Header';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default LandingPage