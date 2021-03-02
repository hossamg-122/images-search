import React, { Component } from 'react';
import './SearchResult.scss'
import ImageCard from './ImageCard';


class SearchResult extends Component {
    render() {  
        const prerender = this.props.results.map((i)=> <div className="image-container" key={i.id}><ImageCard i={i}/></div>); 
        return (
            <div style={{textAlign:"center"}}>
                {prerender}
                {prerender}
                {prerender}
                {prerender}
            </div>
        )
    }
}

export default SearchResult;


