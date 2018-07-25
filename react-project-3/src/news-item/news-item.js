import React from 'react';
import './news-item.css';

import {Link} from 'react-router-dom';

class NewsItem extends React.Component{


    

    render(){
        const pageText = this.props.location.state.pageText;        
        const pageTitle = this.props.location.state.pageTitle;
        const pageAuthor = this.props.location.state.pageAuthor;
        const pageLikes = this.props.location.state.pageLikes;
        const pageDislikes = this.props.location.state.pageDislikes;
        const style = this.props.location.state.pageImage;
        const pageId = this.props.location.state.pageId;


        return(
            <div className='news-page-wrapper' >
            <p><Link to='/home'> ...back </Link></p>
            <p>Page ID: {pageId}</p>

                <div className="news-page-header-image" style={style}></div>
                {/* <h1>News Item</h1> */}
                
                
                <article>
                    <div className="news-page-article"> 
                        <header> 
                            <h1 className="article-title">{pageTitle}</h1>   
                            <h2>Page Subtitle</h2>
                            <h3 className="author">posted by {pageAuthor}</h3>
                        </header>
                        {/* <span>posted {pageDate}</span> */}
                        <p className="article-text">{pageText}</p>
                        <p className="likes"> Likes: {pageLikes} </p>
                        <p className="dislikes"> Dislikes: {pageDislikes} </p>
                    </div>
                </article>

            </div>
        )
    }
}

export default NewsItem;