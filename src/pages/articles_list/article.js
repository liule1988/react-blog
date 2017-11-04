import React, {Component} from 'react';
import {
    Links, Route
} from 'react-router-dom';
import './article.scss'
import axios from 'axios'
import A_ListItem from '../../components/Articles/List/listItem'
import A_Detail from '../articles_detail/articles_detail'
import {action_articles_data} from '../../redux/action/article'
import {connect} from 'react-redux'

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles_data: []
        }

    }

    componentDidMount() {
        axios.get("https://api.github.com/repositories/69333276/issues", {
                headers: {
                    'Accept': 'application/vnd.github.v3.html',
                }
            }
            ,).then(res => {
            this.setState({
                articles_data: res.data
            });
            this.props.onChangeArticles(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <Route exact path="/articles" render={
                    (props) => (<div className="page page-article">
                        <div className="article-list">
                            <div className="article-items">
                                {this.state.articles_data.length > 0 &&
                                this.state.articles_data.map(item => (
                                    <A_ListItem data={item} key={item.id}/>
                                ))  }

                            </div>

                        </div>
                        <div className="article-aside">
                        </div>

                    </div>)
                }/>

                <Route path="/articles/detail/:id" component={A_Detail}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeArticles: (data) => {
            dispatch(action_articles_data(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);


