import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../actions/NewsActions'
import News from '../components/News'
import Loading from '../components/Loading'

class NewsContainer extends Component {
  componentDidMount() {
    this.props.getNews()
  }

  render() {
    const { news: { data, isLoading } } = this.props
    
    return (
      isLoading ? <Loading /> : <div className="news">
        { data.data && <News articles={data}/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(getNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)