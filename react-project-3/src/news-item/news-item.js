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

const dummyNews = DummyData;
class NewsItem1 extends React.Component{


    

    render(){

       
        // const a = [];
    
        
        // This right here is the problem.
        // If i solve this then I have it.
         const value = this.props.match.params.id;  
        // console.log(this.props.match.params.id);
        
        // // console.log(dummyNews[thing])
        // const s = dummyNews[value];
        // console.log(s);
        // a.push(s);
        // console.log(a);
    
        //console.log('match', match)
        // console.log("Hello" + this.props.match.params.id);
    
        // const news = a.map((value, key) => {
        //     console.log("ID is = " + this.props.match.params.id)
        //     return (
        //         // <p>News Item.js</p>
                
        //         <div id={value.id} >  
        //             <p>{value.id}</p>    
        //             <p>{value.title}</p>                      
        //         </div>
        //     )
        // })

        console.log(value)
        const found = dummyNews.find(function(element) {
            console.log(element.id)
            if(element.id === 123){
                // return element.id === value;
                console.log(true);
            }else{
                console.log(false);
            }
            
        });
        console.log(found)

        function isId(id){
            return id.id === this.props.match.params.id;
        }
        console.log(dummyNews.find(isId));
        const myThing =  dummyNews.find(isId);
        // console.log(found.id)



        // const pageText = this.props.location.state.pageText;        
        // const pageTitle = this.props.location.state.pageTitle;
        // const pageAuthor = this.props.location.state.pageAuthor;
        // const pageLikes = this.props.location.state.pageLikes;
        // const pageDislikes = this.props.location.state.pageDislikes;
        // const style = this.props.location.state.pageImage;
        // const pageId = this.props.location.state.pageId;
        // console.log("Hello" + this.match.params.id);
        return(
            <div className='news-page-wrapper' >
            {/* <Test /> */}
            <p><Link to='/home'> ...back </Link></p>
            {/* {news} */}
            {found}
            {found}
            <p>{myThing.id}</p>
            <p>{myThing.title}</p>
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


// This is a bit of a copy and paste job but I understand what's going on what i've been doing wrong.
export const NewsItem = ({match}) =>{
    const identifier = match.params.id;  
    console.log(identifier);

    const found = dummyNews.find(function(element) {
        if(element.id == identifier){
            // return element.id === value;
            console.log(true);
        }else{
            console.log(false);
        }
        
    });
    console.log(found)

    function isId(id){
        return id.id == identifier;
    }
    console.log(dummyNews.find(isId));
    const myThing =  dummyNews.find(isId);


 return(   
    <div className=''>
    <p><Link to='/home'> ...back </Link></p>
        <p>{match.params.id}</p>
        <p>{myThing.id}</p>
        
        <p>{myThing.title}</p>
    </div>
)};


export default NewsItem;