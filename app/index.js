/**
 * Created by Veronika Stoyanova on 22.6.2017 г..
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('root')
    );
});