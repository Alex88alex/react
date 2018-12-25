import React, { Component } from 'react';
import NNews from './Api'
import Pagination from './pagination'


const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH='/search';
const SEARCH_PARAM='query=';
const PAGE_HITS = 'hitsPerPage=';
const PAGE_PARAM = 'page=';

const HITS =[
    {
        value:10,
        label:10,
    },
    {
        value:20,
        label:20,
    },
    {
        value:40,
        label:40,
    },
    {
        value:50,
        label:50,
    }
]

class News extends Component{
    state = {
        seachQuery:'',
        result:{},
        hitsPerPage:20,
        page:0,
    }
    componentDidMount(){
        const {seachQuery,hitsPerPage,page}=this.state;
        this.fetchData(seachQuery,hitsPerPage,page);
    }
    fetchData = (seachQuery,hitsPerPage,page) => {
        fetch   (`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${seachQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
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
            const{seachQuery,hitsPerPage} = this.state;
            this.setState({
                page:0,
            })
            this.fetchData(seachQuery,hitsPerPage,0);
        }
    }
    
    setNews = result =>{
        this.setState({result});
    }
    handleHitsChange = ({target:{value}}) => {
        const {seachQuery} = this.state;

        this.setState({
            hitsPerPage: +value,
            page:0,
        }, ()=> {
            this.fetchData(seachQuery,this.state.hitsPerPage,0);
        })
    }

    handlePageChange = ({target}) => {
        const btnType = target.getAttribute('data-name');
        let {page} = this.state;

        if(!isNaN(btnType)){
            this.updatePage(+btnType);
        }else{
            switch(btnType){
                case 'next':
                this.updatePage(page +1);
                break;
                case'prev':
                this.updatePage(page -1);
                break;
                //default:null;
    
            }
        }
    }
    updatePage = (number)=> {
         const {seachQuery,hitsPerPage} = this.state;
         this.setState({
             page:number,
         }, () => {
             this.fetchData(seachQuery,hitsPerPage,number);
         })
    }
    render(){
        const {seachQuery,result,hitsPerPage}=this.state;
        const{hits = [],page,nbPages} = result;
        console.log(result);
        return (
            <div className="wrapper">
            <input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={seachQuery} />
            <select style={{color:'red',height:'150px',}} options={HITS} handleChange={this.handleHitsChange} value={hitsPerPage}></select>
            <Pagination
            onClick={this.handlePageChange}
            page={page}
            lastPage={nbPages}
            />
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