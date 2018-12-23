import React, { Component } from 'react';



class NNews extends Component{
    render(){
        return (
        <div>
            <p>{this.props.author}</p>
            <p>{this.props.created_at}</p>
            <p>{this.props.title}</p>
            <p>{this.props.points}</p>
            <p>{this.props.url}</p>
            <p>{this.props.num_comments}</p>
        </div>
        );
    }
};
export default NNews;