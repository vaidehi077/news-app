import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author , title , description , url, urlToImage, publishedAt}) {
  return (
    <div>
      <div className='news-article-card'>
           <img src={urlToImage} alt="" className='news-article-img'/>
           <h1 className='article-title'>{title}</h1>
           
           <div className='article-info'> 
            <p className='article-author'>{author}</p>
            <p className='article-publishedAt'>{publishedAt}</p>
           </div>
         
           <p className='article-des'>{description}</p>

           <a href={url} target='blank' className='read-more'>Read More</a>
           </div>

    </div>
  )
}

export default NewsArticle
