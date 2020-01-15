import React, { Component } from 'react';
import AnaKlasor from './AnaKlasor';


class Index extends Component {

    render() {
        return (
            <div className="home-container">
                <h1> öğretmenlerin yeni adresi</h1>
                <AnaKlasor />
            </div>
        )
    }
}

export default (Index);