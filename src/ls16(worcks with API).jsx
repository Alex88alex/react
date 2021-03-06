import React, { Component } from 'react';
import NNews from './Api'

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH='/search';
const SEARCH_PARAM='query=';

class News extends Component{
    state = {
        seachQuery:'',
        result:{},
    }
    componentDidMount(){
        const {seachQuery}=this.state;
        this.fetchData(seachQuery);
    }
    fetchData = (seachQuery) => {
        fetch   (`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${seachQuery}`)
        .then(res =>res.json())
        .then(result=>this.setNews(result))
        .catch(error=>error);
    } 
    handleInputChange = ({target:{value}})=>{
        this.setState({
            seachQuery:value
        })
    }
    getSearch = ({key}) => {
        if(key === 'Enter'){
            const{seachQuery} = this.state;
            this.fetchData(seachQuery);
        }
    }
    
    setNews = result =>{
        this.setState({result});
    }
    render(){
        const {seachQuery,result}=this.state;
        const{hits = []} = result;
        console.log(result);
        return (
            <div className="wrapper">
            <input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={seachQuery} />
            <ul className="newsList">
            <li>
            {hits.map(({author,created_at,num_comments,objectID,title,points,url})=>
            <NNews key={objectID} author={author}
             created_at={created_at} num_comments={num_comments} title={title} points={points} url={url}/>
            )}
            </li>
            </ul>
            </div>
        );
    }
};
export default News;