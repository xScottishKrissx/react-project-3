import React from 'react';

import {Link} from 'react-router-dom';
import DummyData from '../dummy-data';

export const UniqueNewsItem = (props) => {
    const dummyNews = DummyData;
    const a = [];
    const s = dummyNews[props.id];
    a.push(s);

    const news = a.map(arraymap => {
        const imgUrl = "https://unsplash.it/500/200?random=" + arraymap.id;
        const style = {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width:"100%"
        }

        return (
            <div className="" style={style} id={arraymap.id} key={arraymap.id}>               

                        <Link 
                            className="news-item-link"
                            to={{
                                pathname: '/news-item',
                                state: {
                                    pageId: arraymap.id,
                                    pageTitle: arraymap.title,
                                    pageText: arraymap.text,
                                    pageAuthor: arraymap.author,
                                    pageLikes: arraymap.likes,
                                    pageDislikes: arraymap.dislikes,
                                    postDate: arraymap.postdate,
                                    pageImage: style

                                }
                            }}>
                            
                        <div className="">
                            <span>{arraymap.title}</span>
                        </div> 

                        </Link>
                   
                
            </div>
        )
    })
    return (
            <div className="news-item">
                 {news}
            </div>
    );
}

export default UniqueNewsItem;