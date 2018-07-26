import React from 'react';
import './news-item.css';

import {Link} from 'react-router-dom';

import DummyData from '../home-page/dummy-data.js';

// const Test = ({match}) => {
//     // const dummyNews = DummyData;
//     // const a = [];

    
//     // // If I can get this value to be equal to the params I might have it.
//     // const thing = 0;  
    
    
//     // const s = dummyNews[thing];
//     // a.push(s);

//     // //console.log('match', match)
//     // //console.log("Hello" + this.match.params.id);

//     // const news = a.map(arraymap => {
//     //     return (
//     //         <div id={arraymap.id} key={arraymap.id}>  
//     //             <p>{arraymap.id}</p>    
//     //             <p>{arraymap.title}</p>                        
                
//     //         </div>
//     //     )
//     // })

//     return (
//     <div>{news}</div>
//     )
// }


class NewsItem extends React.Component{


    

    render(){

        const dummyNews = DummyData;
        const a = [];
    
        
        // If I can get this value to be equal to the params I might have it.
        const thing = this.props.match.params.id;  
        
        
        const s = dummyNews[thing];
        a.push(s);
    
        //console.log('match', match)
        //console.log("Hello" + this.match.params.id);
    
        const news = a.map(arraymap => {
            return (
                <div id={arraymap.id} key={arraymap.id}>  
                    <p>{arraymap.id}</p>    
                    <p>{arraymap.title}</p>                        
                    
                </div>
            )
        })

        // const pageText = this.props.location.state.pageText;        
        // const pageTitle = this.props.location.state.pageTitle;
        // const pageAuthor = this.props.location.state.pageAuthor;
        // const pageLikes = this.props.location.state.pageLikes;
        // const pageDislikes = this.props.location.state.pageDislikes;
        // const style = this.props.location.state.pageImage;
        // const pageId = this.props.location.state.pageId;
        console.log("Hello" + this.props.match.params.id);
        return(
            <div className='news-page-wrapper' >
            {/* <Test /> */}
            <p><Link to='/home'> ...back </Link></p>
            {news}
            {/* <p>Page ID: {pageId}</p>

                <div className="news-page-header-image" style={style}></div>
           
                
                
                <article>
                    <div className="news-page-article"> 
                        <header> 
                            <h1 className="article-title">{pageTitle}</h1>   
                            <h2>Page Subtitle</h2>
                            <h3 className="author">posted by {pageAuthor}</h3>
                        </header>
                        
                        <p className="article-text">{pageText}</p>
                        <p className="likes"> Likes: {pageLikes} </p>
                        <p className="dislikes"> Dislikes: {pageDislikes} </p>
                    </div>
                </article> */}

            </div>
        )
    }
}

export default NewsItem;