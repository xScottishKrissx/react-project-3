import React from 'react';
import {Link} from 'react-router-dom';
import GalleryData from '../dummy-data';
import UniqueNewsItem from '../unique-news-item/unique-news-item';



const testData = GalleryData;
console.log(testData);
export const NewsItemLoop = () => {
    //let i;
    //const dbLength = 9;
    //let newsArray = [];
    
    //const newArray = [];
    //const testS = testData[];

   // console.log(testS)
    
    // const testThing = testData.map((testMap,index) => {
        

    //        <div className=''>
    //          <UniqueNewsItem id={testMap.id} /> 
    //          <p>{index}</p>   
    //        </div>   
    // })    

    return (
        <div className=''>
            {/* {testThing} */}
            
            <p>News Item Loop</p>
            {/* {newMap} */}
            <NewMap />
        </div>
    );
}


const NewMap = () => {
//     const newMap = testData.forEach(function(value, key) {
//         console.log(key + ' = ' + value.id);    
//         return(
//             <div className='' key={key}>
//             <h1>Work</h1>
//                 <p>Hello {key + ' = ' + value.id}</p> 
//             </div>    
//         )   
//   });

  const myEffingMap = testData.map((value,key) => {
      console.log(value.id, key);
      return (
                // <UniqueNewsItem id={value.id} key={key} /> 
                <div className='test-1'>
                    <p>{value.id}</p>
                </div>
        );
  })

//   for (var key of testData.keys()) {
//     console.log(key);
//   }

        var found = testData.find(function(element) {
            return element.id === 123;
        });

  console.log(found.id)
//   const newNewMap = Object.keys(testData).map((item, i) => {
//       <p>key{i} + name{testData[item]}</p>
//   })
//   console.log(Object.keys(testData));

// const newNewNewMap = Object.keys(testData).map(key => 
//     <option>{testData[key.id]}</option>
// )
// console.log(newNewNewMap);


  return (
    <div>
            <div>{myEffingMap}</div>
            <div>{found.id}</div>
            <div>{found.title}</div>

            <Link 
                className="news-item-link"
                
                to={{
                    pathname: '/news-item/' + found.id,
                    // pathname: '/news-item/:id',
                }}>
                
            <div className="">
                <span>{found.title}</span>
            </div> 

            </Link>

    </div>
    
    );  

  
}
export default NewsItemLoop;