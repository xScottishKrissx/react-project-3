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

        return(
            <div className='news-item-wrapper' >

                <div className="" style={style}>Image</div>
                <h1>News Item</h1>
                
                <p><Link to='/home'>...go back</Link></p>

                <div className="">     
                    <h3>posted by {pageAuthor}</h3>
                    {/* <span>posted {pageDate}</span> */}
                    <p className="">{pageText}</p>
                    <p className=""> Likes: {pageLikes} </p>
                    <p className=""> Dislikes: {pageDislikes} </p>
                </div>

            </div>
        )
    }
}

export default NewsItem;