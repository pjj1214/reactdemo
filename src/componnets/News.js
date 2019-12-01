import React from 'react';

class News extends React.Component {
    constructor() {
        super();
        this.state={
            news:'震惊'
        }
    }
    render() {
    return <div>{this.state.news}</div>
    }
}
export default News;