import React, { Component } from 'react'
import './News.css'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { articles } = this.props

    return (
      <div>
        {articles.data.data.map((article, i) => 
          <div key={i} className="article">
            <span className="article__title">{article.title}</span>
            <p className="article__text">{article.text}</p>
          </div>
        )}
        <span>Всего новостей: {articles.data.data.length}</span>
      </div>
    )
  }
}
 
export default News;